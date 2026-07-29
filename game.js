const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
    document.getElementById("menu").style.display = "none";

    document.body.innerHTML = `
    <div style="
        width:100%;
        height:100vh;
        background:#444;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:32px;
        font-family:Arial;
    ">
        🏍️ ACHX Moto Challenge<br><br>
        O'yin qurilmoqda...
    </div>`;
});
