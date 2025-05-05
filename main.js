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

        if(ballX < paddle.offsetLeft + paddle.offsetWidth && ballY > paddle.offsetTop && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight) {
            /**
             * !! Condition logic !!
             * * 1.Checks if ball's left edge is to the left of paddle's right edge
             * * 2.Checks if ball's top edge is below paddle's top edge
             * * 3.Checks if ball's bottom edge is above paddle's bottom edge
             */
            dx *= -1;
        }

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    }, 5);


    let paddleY = 0;
    let dPy = 10;
    // add keyboard control
    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if(event.keyCode == 38 && paddleY > 0) {
            // up arrow pressed
            paddleY += (-1)*dPy;
            console.log('up');
            

        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - (paddle.offsetHeight + dPy)) {
            // down arrow pressed
            paddleY += dPy;
        }
        paddle.style.top = `${paddleY}px`;
    });
    // add mouse control
    document.addEventListener('mousemove', (event) => {
        // close to paddle
        if(event.clientX > table.offsetLeft + (table.offsetWidth/2)) return;        
        // get mouse position
        let mouseDistanceFromTop = event.clientY;
        // get table top position
        let distanceOfTableFromTop = table.offsetTop;
        // calculate paddle position
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        // apply position
        paddleY = mousePointControl;
        // boundary check
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return;
        // update paddle position
        paddle.style.top = `${paddleY}px`;
    })
});
