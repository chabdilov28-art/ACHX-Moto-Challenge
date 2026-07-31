const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const coinText = document.getElementById("coin");
const levelText = document.getElementById("level");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let coins = 0;
let level = 1;

let bike = {
    x: 120,
    y: 0,
    w: 80,
    h: 40,
    vy: 0,
    jumping: false
};

let roadOffset = 0;

function groundY() {
    return canvas.height - 100;
}

function startGame() {
    menu.style.display = "none";
    game.style.display = "block";

    bike.y = groundY() - bike.h;
    bike.vy = 0;
    bike.jumping = false;

    gameLoop();
}

playBtn.onclick = startGame;

backBtn.onclick = () => {
    game.style.display = "none";
    menu.style.display = "flex";
};

window.addEventListener("touchstart", jump);
window.addEventListener("keydown", (e) => {
    if (e.code === "Space") jump();
});

function jump() {
    if (!bike.jumping && game.style.display === "block") {
        bike.vy = -18;
        bike.jumping = true;
    }
}

function update() {

    bike.vy += 0.9;
    bike.y += bike.vy;

    if (bike.y >= groundY() - bike.h) {
        bike.y = groundY() - bike.h;
        bike.vy = 0;
        bike.jumping = false;
    }

    roadOffset -= 8;
    if (roadOffset < -40) roadOffset = 0;
}

function draw() {

    ctx.fillStyle = "#6ec6ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#3cb043";
    ctx.fillRect(0, groundY(), canvas.width, 100);

    ctx.fillStyle = "#555";
    ctx.fillRect(0, groundY() + 20, canvas.width, 60);

    ctx.fillStyle = "#ffffff";

    for (let i = roadOffset; i < canvas.width; i += 60) {
        ctx.fillRect(i, groundY() + 48, 30, 6);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(bike.x, bike.y, bike.w, bike.h);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(bike.x + 15, bike.y + bike.h, 10, 0, Math.PI * 2);
    ctx.arc(bike.x + 65, bike.y + bike.h, 10, 0, Math.PI * 2);
    ctx.fill();

    coinText.textContent = coins;
    levelText.textContent = level;
}

function gameLoop() {

    if (game.style.display === "none") return;

    update();
    draw();

    requestAnimationFrame(gameLoop);
}
