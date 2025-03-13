const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const paddleWidth = 10, paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = playerY;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 4, ballSpeedY = 4, ballSize = 10;

function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawBall(x, y, size, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}

function moveEverything() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX <= 0) {
        if (ballY > playerY && ballY < playerY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            const deltaY = ballY - (playerY + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            resetBall();
        }
    }

    if (ballX >= canvas.width) {
        if (ballY > aiY && ballY < aiY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            const deltaY = ballY - (aiY + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            resetBall();
        }
    }

    aiY += (ballY - (aiY + paddleHeight / 2)) * 0.05;
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 3;
}

function drawEverything() {
    drawRect(0, 0, canvas.width, canvas.height, 'black');
    drawRect(0, playerY, paddleWidth, paddleHeight, 'white');
    drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, 'white');
    drawBall(ballX, ballY, ballSize, 'white');
}

function gameLoop() {
    moveEverything();
    drawEverything();
}

canvas.addEventListener('mousemove', function(evt) {
    const rect = canvas.getBoundingClientRect();
    const root = document.documentElement;
    const mouseY = evt.clientY - rect.top - root.scrollTop;
    playerY = mouseY - paddleHeight / 2;
});

setInterval(gameLoop, 1000 / 60);