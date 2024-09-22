function move(element) {
    const move = element.id.toUpperCase();

    const target = document.getElementById('target');
    target.textContent = "YOU CHOOSE: " + move;

    enemyTurn(move);
}

function enemyTurn(move) {
    const randomNumber = Math.floor(Math.random() * 3);

    let enemyMove = ''; 

    switch (randomNumber) {
        case 0:
            enemyMove = "ROCK";
            break;
        case 1:
            enemyMove = "PAPER";
            break;
        case 2:
            enemyMove = "SCISSORS";
            break;
    }

    const enemy = document.getElementById('enemy');
    enemy.textContent = "ENEMY CHOOSES: " + enemyMove;

    determineWinner(move, enemyMove);
}

function determineWinner(move, enemyMove) {
    const status = document.getElementById("status");

    if (move === enemyMove) {
        status.textContent = "It's a tie!";
        return;
    }

    if (move === "PAPER" && enemyMove === "ROCK" ||
        move === "SCISSORS" && enemyMove === "PAPER" ||
        move === "ROCK" && enemyMove === "SCISSORS") {
        status.textContent = "You win! " + move + " beats " + enemyMove + ".";
    } else {
        status.textContent = "You lose! " + enemyMove + " beats " + move + ".";
    }
}
