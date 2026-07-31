const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let bike = {
    x: 120,
    y: 0,
    w: 80,
    h: 40,
    speed: 4
};

function startGame() {
    menu.style.display = "none";
    game.style.display = "block";

    bike.y = canvas.height - 120;

    requestAnimationFrame(gameLoop);
}

playBtn.addEventListener("click", startGame);

backBtn.addEventListener("click", () => {
    game.style.display = "none";
    menu.style.display = "flex";
});

function drawGround() {
    ctx.fillStyle = "#444";
    ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
}

function drawBike() {
    ctx.fillStyle = "red";
    ctx.fillRect(bike.x, bike.y, bike.w, bike.h);

    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(bike.x + 15, bike.y + bike.h, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(bike.x + bike.w - 15, bike.y + bike.h, 12, 0, Math.PI * 2);
    ctx.fill();
}

function gameLoop() {
    if (game.style.display === "none") return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGround();
    drawBike();

    requestAnimationFrame(gameLoop);
}
