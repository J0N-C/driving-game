const $f1Car = document.querySelector('#f1-car-img');
const right = 90;
const left = -90;
const myCar = {
  currentDir: 0
};

document.addEventListener('keydown', function (event) {
  const newDir = directionalMove(event);
  if (newDir === myCar.currentDir + 90 || (newDir === 0 && myCar.currentDir === 270)) {
    myCar.currentDir += right;
  }
  if (newDir === myCar.currentDir - 90 || (newDir === 270 && myCar.currentDir === 0)) {
    myCar.currentDir += left;
  }
  $f1Car.style.transition = 'transform 0.1s';
  $f1Car.style.transform = `rotate(${myCar.currentDir}deg)`;
  setTimeout(resetDirection, 100);
});

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

function directionalMove(event) {
  if (event.key === 'ArrowRight' || event.key === 'd') {
    return 0;
  }
  if (event.key === 'ArrowUp' || event.key === 'w') {
    return 270;
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    return 180;
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    return 90;
  }
}
