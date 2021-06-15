let targetRadius = 10;
let targetPositionX;
let targetPositionY;
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

let drawTarget = function (x, y) {
    circles(x, y, targetRadius + 30, 'white');
    circles(x, y, targetRadius + 20, 'red');
    circles(x, y, targetRadius + 10, 'white');
    circles(x, y, targetRadius, 'red');
};

let circles = function (x, y, targetRadius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, targetRadius, 0, 2 * Math.PI);
    context.fill();
};

let clean = function () {
    context.clearRect(0, 0, 900, 600);
};

let raffle = function (max) {
    return Math.floor(Math.random() * max);
};

let displays = function () {
    clean();
    targetPositionX = raffle(900);
    targetPositionY = raffle(600);
    drawTarget(targetPositionX, targetPositionY);
};

setInterval(displays, 1500);

const hits = document.querySelector('#number-of-hits');
let numberOfHits = 0;
const errors = document.querySelector('#number-of-errors');
let numberOfErrors = 0;

canvas.onclick = function (event) {
    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;
    if (x > targetPositionX - targetRadius &&
        x < targetPositionX + targetRadius &&
        y > targetPositionY - targetRadius &&
        y < targetPositionY + targetRadius) {
        numberOfHits++;
        hits.textContent = numberOfHits;
    } else {
        numberOfErrors++;
        errors.textContent = numberOfErrors;
    };
};