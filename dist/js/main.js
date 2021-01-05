"use strict";
var container = document.getElementById('container');
var colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
var SQUARES = 500;
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function setColor(element) {
    var el = element;
    var color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = "0 0 2px " + color + ", 0 0 10px  " + color;
}
function removeColor(element) {
    var el = element;
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = '0 0 2px rgba(0, 0, 0, 1)';
}
var _loop_1 = function (i) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', function () { return setColor(square); });
    square.addEventListener('mouseout', function () { return removeColor(square); });
    container.appendChild(square);
};
for (var i = 0; i < SQUARES; i++) {
    _loop_1(i);
}
