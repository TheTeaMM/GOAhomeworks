document.addEventListener('DOMContentLoaded', function() {
    let score = 0;

    const clickButton = document.getElementById('clickButton');
    const resetButton = document.getElementById('resetButton');
    const scoreDisplay = document.getElementById('score');

    clickButton.addEventListener('click', function() {
        score += getRandomNumber(1, 10); // Увеличиваем очки на случайное число от 1 до 10
        updateScore();
    });

    resetButton.addEventListener('click', function() {
        score = 0;
        updateScore();
    });

    function updateScore() {
        scoreDisplay.textContent = score;
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
