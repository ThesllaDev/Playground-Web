var attempts = document.getElementById('attempts');
var attemptValue = document.getElementById('attemptValue');
var previousNumbers = document.getElementById('previousNumbers');
var answer = document.getElementById('answer');

var secretNumber = parseInt(Math.random() * 100 + 1);
var numberOfAttempts = 11;
console.log(secretNumber);

function checkAndRespond() {
    while (numberOfAttempts > 0) {
        if (attemptValue.value == secretNumber) {
            numberOfAttempts = 0;
            answer.style.color = 'green';
            answer.innerHTML = `Parabéns!!! Você acertou, o número correto é: ${attemptValue.value}`;
            break;
        } else if (numberOfAttempts == 1) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            answer.style.color = 'red';
            answer.innerHTML = `Game Over, o número correto era: ${secretNumber}`;
            break;
        } else if (secretNumber > attemptValue.value) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            previousNumbers.style.color = 'red';
            previousNumbers.textContent += `${attemptValue.value}, `;
            answer.style.color = 'red';
            answer.innerHTML = `Você errou, o número é maior que ${attemptValue.value}, tente denovo`;
            return;
        } else if (secretNumber < attemptValue.value) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            previousNumbers.style.color = 'red';
            previousNumbers.textContent += `${attemptValue.value}, `;
            answer.style.color = 'red';
            answer.innerHTML = `Você errou, o número é menor que ${attemptValue.value}, tente denovo`;
            return;
        }
    }
}