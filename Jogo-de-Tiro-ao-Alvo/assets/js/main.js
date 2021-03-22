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

var hits = document.getElementById("number-of-hits");
var numberOfHits = 0;
var errors = document.getElementById("number-of-errors");
var numberOfErrors = 0;

canvas.onclick = function (event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    if ((x > targetPositionX - targetRadius) && (x < targetPositionX + targetRadius) &&
        (y > targetPositionY - targetRadius) && (y < targetPositionY + targetRadius)) {
        numberOfHits++;
        hits.innerHTML = numberOfHits;
    } else {
        numberOfErrors++;
        errors.innerHTML = numberOfErrors;
    };
};