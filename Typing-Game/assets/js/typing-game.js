const quotes = [
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "There is nothing more deceptive than an obvious fact.",
    "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
    "I never make exceptions. An exception disproves the rule.",
    "What one man can invent another can discover.",
    "Nothing clears up a case so much as stating it to another person.",
    "Education never ends, Watson. It is a series of lessons, with the greatest for the last."
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();
let hits = 0;
let miss = 0;

const quoteElement = document.querySelector(".quote");
const typedValueElement = document.querySelector(".typed-value");
const hitsValue = document.querySelector("#hits");
const missValue = document.querySelector("#miss");
const model = document.querySelector(".model");
const messageElement = document.querySelector(".message");
typedValueElement.disabled = true;

document.querySelector("#btnStart").addEventListener("click", () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(" ");
    wordIndex = 0;
    quoteElement.innerText = "";

    const spanWords = words.map((word) => `<span>${word} </span>`);
    quoteElement.insertAdjacentHTML("afterbegin", spanWords.join(""));
    quoteElement.childNodes[0].className = "highlight";
    messageElement.innerText = "";

    typedValueElement.disabled = false;
    typedValueElement.value = "";
    typedValueElement.focus();

    startTime = new Date().getTime();
});

typedValueElement.addEventListener("input", () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message =
            `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
        model.style.display = "flex";
        typedValueElement.disabled = true;
    } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
        typedValueElement.value = "";
        wordIndex++;
        hits++;
        hitsValue.innerText = `Hits: ${hits}`;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = "";
        }
        quoteElement.childNodes[wordIndex].className = "highlight";
    } else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = "";
    } else {
        typedValueElement.className = "error";
        miss++;
        missValue.innerText = `Miss: ${miss}`;
    }
});

document
    .querySelector("#btnClose")
    .addEventListener("click", () => (model.style.display = "none"));
document.querySelector("#btnRestart").addEventListener("click", () => {
    hits = 0;
    hitsValue.innerText = `Hits: ${hits}`;
    miss = 0;
    missValue.innerText = `Miss: ${miss}`;
});
