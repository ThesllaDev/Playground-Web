var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = canvas.height / 2;

context.translate(radius, radius);
radius *= 0.9;

function drawClock() {
  drawFace(context, radius);
  drawNumbers(context, radius);
  drawTime(context, radius);
}

var colorGold = "#D4AF0C";
var colorSilver = "#eee";
var colorPurple = "#660099";
var colorViolet = "#3A0057";
var colorYellow = "#FFF200";

function drawFace(context, radius) {
  var gradient;
  context.beginPath();
  context.arc(0, 0, radius, 0, 2 * Math.PI);
  context.fillStyle = colorSilver;
  context.fill();
  gradient = context.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  gradient.addColorStop(0, colorGold);
  gradient.addColorStop(0.5, colorYellow);
  gradient.addColorStop(1, colorGold);
  context.strokeStyle = gradient;
  context.lineWidth = radius * 0.1;
  context.stroke();
  context.beginPath();
  context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  context.fillStyle = colorPurple;
  context.fill();
}

function drawNumbers(context, radius) {
  var angles;
  var numbers;
  context.font = radius * 0.15 + "px arial";
  context.textBaseline = "middle";
  context.textAlign = "center";
  for (numbers = 1; numbers < 13; numbers++) {
    angles = (numbers * Math.PI) / 6;
    context.rotate(angles);
    context.translate(0, -radius * 0.85);
    context.rotate(-angles);
    context.fillText(numbers.toString(), 0, 0);
    context.rotate(angles);
    context.translate(0, radius * 0.85);
    context.rotate(-angles);
  }
}

function drawTime(context, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(context, hour, radius * 0.5, radius * 0.07);
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(context, minute, radius * 0.8, radius * 0.07);
  second = (second * Math.PI) / 30;
  drawHand(context, second, radius * 0.9, radius * 0.02);
}

function drawHand(context, pos, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.rotate(pos);
  context.lineTo(0, -length);
  context.stroke();
  context.rotate(-pos);
}

setInterval(drawClock, 1000);
