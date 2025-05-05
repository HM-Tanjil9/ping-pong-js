document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById('ping-pong-table');
    let ball = document.getElementById('ball');
    // ball position
    let ballX = 10;
    let ballY = 10;
    // ball style change
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    let dx = 2;
    let dy = 2;



    setInterval(function exec() {
        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx = -dx;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy = -dy;
    }, 5);
});