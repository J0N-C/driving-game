const $f1Car = document.querySelector('#f1-car-img');
const right = 90;
const left = -90;
const myCar = {
  currentDir: 0
};

document.addEventListener('keydown', function (event) {
  directionalMove(event);
  $f1Car.style.transition = 'transform 0.1s';
  $f1Car.style.transform = `rotate(${myCar.currentDir}deg)`;
  setTimeout(resetDirection, 100);
});

/* for hiding smooth transition when hitting 0/360 or -90 */
function resetDirection() {
  if (myCar.currentDir >= 360) {
    myCar.currentDir = 0;
    $f1Car.style.transition = '';
    $f1Car.style.transform = 'rotate(0deg)';
  }
  if (myCar.currentDir === -90) {
    myCar.currentDir = 270;
    $f1Car.style.transition = '';
    $f1Car.style.transform = 'rotate(270deg)';
  }
}

/* change direction based on key entered wasd or arrows */
function directionalMove(event) {
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
}