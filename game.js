const startBtn = document.getElementById("startBtn");
const menu = document.getElementById("menu");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let bike = {
  x: 165,
  y: 520,
  w: 30,
  h: 60
};

startBtn.onclick = function () {
  menu.style.display = "none";
  canvas.style.display = "block";
  gameLoop();
};

function drawRoad() {
  ctx.fillStyle = "#555";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;

  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, y);
    ctx.lineTo(canvas.width / 2, y + 20);
    ctx.stroke();
  }
}

function drawBike() {
  ctx.fillStyle = "red";
  ctx.fillRect(bike.x, bike.y, bike.w, bike.h);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRoad();
  drawBike();

  requestAnimationFrame(gameLoop);
}

document.addEventListener("touchstart", function(e) {
  let x = e.touches[0].clientX;

  if (x < window.innerWidth / 2) {
    bike.x -= 20;
  } else {
    bike.x += 20;
  }

  if (bike.x < 0) bike.x = 0;
  if (bike.x > canvas.width - bike.w)
    bike.x = canvas.width - bike.w;
});
