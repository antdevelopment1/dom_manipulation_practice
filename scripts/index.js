var player1 = document.querySelector('[data-player1]');
var player2 = document.querySelector('[data-player2]');
var reset = document.querySelector('[data-reset]');
var player1Span = document.querySelector('[data-player1-span]');
var player2Span = document.querySelector('[data-player2-span]');
player1Score = 0;
player2Score = 0;
var gameOver = false;
var winningScore = 5;
resetAll = 0;

player1.addEventListener('click', function() {
    if (!gameOver) {
        player1Score++;
        if (player1Score === winningScore) {
            gameOver = true;
        }
    }
    player1Span.innerHTML = player1Score; 
})

player2.addEventListener('click', function() {
    if (!gameOver) {
        player2Score++;
        if (player2Score === winningScore) {
            gameOver = true;
        }
    }
    player2Span.innerHTML = player2Score; 
})

reset.addEventListener('click', function() {
    alert('reset');
})


