const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    menu.style.display = "none";
    game.style.display = "block";

    game.width = window.innerWidth;
    game.height = window.innerHeight;

    const ctx = game.getContext("2d");

    function gameLoop() {

        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, game.width, game.height);

        ctx.fillStyle = "red";
        ctx.font = "40px Arial";
        ctx.fillText("ACHX MOTO DEMO", 50, 80);

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Moto Challenge boshlanmoqda...", 50, 130);

        requestAnimationFrame(gameLoop);
    }

    gameLoop();

});
