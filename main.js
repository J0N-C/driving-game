const $f1Car = document.querySelector('#f1-car-img');
const right = 90;
const left = -90;
var currentDir = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight' || event.key === 'd') {
    currentDir += right;
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    currentDir += left;
  }
  $f1Car.style.transition = 'transform 0.1s';
  $f1Car.style.transform = `rotate(${currentDir}deg)`;
  setTimeout(resetDirection, 100);
});

function resetDirection() {
  if (currentDir >= 360 || currentDir <= -360) {
    currentDir = 0;
    $f1Car.style.transition = '';
    $f1Car.style.transform = 'rotate(0deg)';
  }
}
