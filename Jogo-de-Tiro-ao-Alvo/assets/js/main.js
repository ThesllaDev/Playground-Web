var targetRadius = 10;
var targetPositionX;
var targetPositionY;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var drawTarget = function (x, y) {
    circles(x, y, targetRadius + 30, "white");
    circles(x, y, targetRadius + 20, "red");
    circles(x, y, targetRadius + 10, "white");
    circles(x, y, targetRadius, "red");
};

var circles = function (x, y, targetRadius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, targetRadius, 0, 2 * Math.PI);
    context.fill();
};

var clean = function () {
    context.clearRect(0, 0, 900, 600);
};

var raffle = function (max) {
    return Math.floor(Math.random() * max);
};

var displays = function () {
    clean();
    targetPositionX = raffle(900);
    targetPositionY = raffle(600);
    drawTarget(targetPositionX, targetPositionY);
};

setInterval(displays, 1500);