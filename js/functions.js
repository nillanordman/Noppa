
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


document.addEventListener('DOMContentLoaded', function() {
    const diceDiv = document.getElementById('dice');
    const diceImage = document.getElementById('diceImage');

    
    diceDiv.addEventListener('click', function() {
        const rolledNumber = rollDice(); 
        diceImage.src = `./img/${rolledNumber}.png`; 
    });
});

