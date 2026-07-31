function gameLoop() {
    if (game.style.display === "none") return;

    ctx.fillStyle = "#6ec6ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#555";
    ctx.fillRect(0, canvas.height - 60, canvas.width, 60);

    ctx.fillStyle = "red";
    ctx.fillRect(100, canvas.height - 120, 80, 40);

    requestAnimationFrame(gameLoop);
}
