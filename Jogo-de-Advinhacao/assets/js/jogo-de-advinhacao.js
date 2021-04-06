const attempts = document.querySelector('#attempts');
const attemptValue = document.querySelector('#attemptValue');
const previousNumbers = document.querySelector('#previousNumbers');
const answer = document.querySelector('#answer');

var secretNumber = parseInt(Math.random() * 100 + 1);
var numberOfAttempts = 11;

function checkAndRespond() {
    answer.style.color = 'red';
    previousNumbers.style.color = 'red';
    while (numberOfAttempts > 0) {
        if (attemptValue.value == "") {
            alert('Insira um número!');
            break;
        }
        if (attemptValue.value == secretNumber) {
            numberOfAttempts = 0;
            answer.style.color = 'green';
            answer.textContent = `Parabéns!!! Você acertou, o número correto é: ${attemptValue.value}`;
            break;
        } else if (numberOfAttempts == 1) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            answer.textContent = `Game Over, o número correto era: ${secretNumber}`;
            break;
        } else if (secretNumber > attemptValue.value) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            previousNumbers.textContent += `${attemptValue.value}, `;
            answer.textContent = `Você errou, o número é maior que ${attemptValue.value}, tente denovo`;
            return;
        } else if (secretNumber < attemptValue.value) {
            numberOfAttempts--;
            attempts.textContent = numberOfAttempts;
            previousNumbers.textContent += `${attemptValue.value}, `;
            answer.textContent = `Você errou, o número é menor que ${attemptValue.value}, tente denovo`;
            return;
        }
    }
}