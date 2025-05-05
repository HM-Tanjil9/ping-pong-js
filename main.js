document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById('ping-pong-table');
    let paddle = document.getElementById('paddle');
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

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    }, 5);


    let paddleY = 0;
    let dPy = 5;
    document.addEventListener('keydown', (event) => {
        if(event.keyCode == 38 && paddleY > 0) {
            // up arrow pressed
            paddleY += (-1)*dPy;
            console.log('up');
            

        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - (paddle.offsetHeight + dPy)) {
            // down arrow pressed
            paddleY += dPy;
        }
        paddle.style.top = `${paddleY}px`;
    })
});
