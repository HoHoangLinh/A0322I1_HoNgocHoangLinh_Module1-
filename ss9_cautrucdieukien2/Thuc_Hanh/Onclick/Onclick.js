let ball = null;
ball = document.getElementById('Img');
function init() {
    ball = document.getElementById('Img');
    ball.style.position = 'relative';
    ball.style.left = '0px';
}
function MoveRight() {
    ball.style.left = parseInt(ball.style.left) + 10 + 'px';
}
    window.onload = init;
