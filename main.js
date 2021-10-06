const $f1CarDiv = document.querySelector('#f1-car');
const $f1Car = document.querySelector('#f1-car-img');
const right = 90;
const left = -90;
const myCar = {
  currentDir: 0,
  speed: 0,
  position: [0, 0],
  startCarId: null
};

/* listener for direction and car start/stop */
document.addEventListener('keydown', function (event) {
  directionalMove(event);
  startCar(event);
});

/* for hiding smooth transition when hitting 0/360 or -90 */
function resetDirection() {
  $f1Car.style.transition = '';
  if (myCar.currentDir >= 360) {
    myCar.currentDir = 0;
    $f1Car.style.transform = 'rotate(0deg)';
  }
  if (myCar.currentDir === -90) {
    myCar.currentDir = 270;
    $f1Car.style.transform = 'rotate(270deg)';
  }
}

/* change direction based on key entered wasd or arrows */
function directionalMove(event) {
  if (event.key === ' ') return;
  let newDir;
  if (event.key === 'ArrowRight' || event.key === 'd') {
    newDir = 0;
  }
  if (event.key === 'ArrowUp' || event.key === 'w') {
    newDir = 270;
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    newDir = 180;
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    newDir = 90;
  }
  if (newDir === myCar.currentDir + 90 || (newDir === 0 && myCar.currentDir === 270)) {
    myCar.currentDir += right;
  }
  if (newDir === myCar.currentDir - 90 || (newDir === 270 && myCar.currentDir === 0)) {
    myCar.currentDir += left;
  }
  $f1Car.style.transition = 'transform 0.1s';
  $f1Car.style.transform = `rotate(${myCar.currentDir}deg)`;
  setTimeout(resetDirection, 100);
}

/* start or stop car */
function startCar(event) {
  if (event.key !== ' ') return;
  if (myCar.speed === 0) {
    myCar.speed = 1;
    myCar.startCarId = setInterval(moveCar, 16);
  } else {
    myCar.speed = 0;
    clearInterval(myCar.startCarId);
    myCar.startCarId = null;
  }
}

/* car moves in direction of currentDir when active */
function moveCar() {
  if (myCar.currentDir === 0) {
    myCar.position[0] += myCar.speed;
    $f1CarDiv.style.left = `${myCar.position[0]}rem`;
  }
  if (myCar.currentDir === 90) {
    myCar.position[1] += myCar.speed;
    $f1CarDiv.style.top = `${myCar.position[1]}rem`;
  }
  if (myCar.currentDir === 180) {
    myCar.position[0] -= myCar.speed;
    $f1CarDiv.style.left = `${myCar.position[0]}rem`;
  }
  if (myCar.currentDir === 270) {
    myCar.position[1] -= myCar.speed;
    $f1CarDiv.style.top = `${myCar.position[1]}rem`;
  }
}
