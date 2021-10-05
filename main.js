const $f1Car = document.querySelector('#f1-car-img');
const right = 90;
var currentDir = 0;

document.addEventListener('keydown', function (event) {
  currentDir += right;
  $f1Car.style.transform = `rotate(${currentDir}deg)`;
});
