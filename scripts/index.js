var player1 = document.querySelector('[data-player1]');
var player2 = document.querySelector('[data-player2]');
var reset = document.querySelector('[data-reset]');
var player1Span = document.querySelector('[data-player1-span]');
var player2Span = document.querySelector('[data-player2-span]');
var winningScoreDisplay = document.querySelector('p span');
var para = document.querySelector('p')
var numInput = document.querySelector('input');
player1Score = 0;
player2Score = 0;
var gameOver = false;
var winningScore = 5;
resetAll = 0;

player1.addEventListener('click', function() {
    if (!gameOver) {
        player1Score++;
        if (player1Score === winningScore) {
            player1Span.classList.add('winner');
            gameOver = true;
        }
    }
    player1Span.innerHTML = player1Score; 
});

player2.addEventListener('click', function() {
    if (!gameOver) {
        player2Score++;
        if (player2Score === winningScore) {
            player2Span.classList.add('winner');
            gameOver = true;
        }
    }
    player2Span.innerHTML = player2Score; 
});

reset.addEventListener('click', function() {
    resetGame();
});

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Span.textContent = 0;
    player2Span.textContent = 0;
    player1Span.classList.remove('winner');
    player2Span.classList.remove('winner');
    gameOver = false;
}

// Uses change when there is any kind of change in the input field as opposed to watching for a click.
numInput.addEventListener('change', function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetGame();
});




