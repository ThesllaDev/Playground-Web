const god = {
    name: "One-Above-All",
    image: "https://s.aficionados.com.br/imagens/one-above-all1.jpg",
    attributes: {
        attack: 100,
        defense: 100,
        intelligence: 100,
        power: 100
    }
}
const blackRay = {
    name: "Raio Negro",
    image: "https://s.aficionados.com.br/imagens/reiinumanos_cke.jpg",
    attributes: {
        attack: 9,
        defense: 9,
        intelligence: 8,
        power: 10
    }
}
const cMarvel = {
    name: "Capitã Marvel",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fe/CapMarvel-EndgameProfile.jpeg",
    attributes: {
        attack: 10,
        defense: 9,
        intelligence: 7,
        power: 7
    }
}
const hela = {
    name: "Hela",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c0/Thor_Ragnarok_Textless_Character_Posters_01.jpg",
    attributes: {
        attack: 9,
        defense: 10,
        intelligence: 7,
        power: 7
    }
}
const ironMan = {
    name: "Homem de Ferro ",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg",
    attributes: {
        attack: 8,
        defense: 7,
        intelligence: 10,
        power: 5
    }
}
const panther = {
    name: "Pantera Negra",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/99/Black_Panther_AIW_Profile.jpg",
    attributes: {
        attack: 9,
        defense: 10,
        intelligence: 6,
        power: 5
    }
}
const shuri = {
    name: "Shuri",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fd/Shuri_AIW_Profile.jpg",
    attributes: {
        attack: 9,
        defense: 7,
        intelligence: 10,
        power: 5
    }
}
const thor = {
    name: "Thor",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg",
    attributes: {
        attack: 10,
        defense: 7,
        intelligence: 5,
        power: 8
    }
}
const wScarlet = {
    name: "Feiticeira Escarlate",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/30/Wanda_from_WandaVision.jpg",
    attributes: {
        attack: 9,
        defense: 9,
        intelligence: 7,
        power: 10
    }
}

const listOfCards = [god, blackRay, cMarvel, hela, ironMan, panther, shuri, thor, wScarlet];

let playerPoints = 0;
let machinePoints = 0;

const btnDraw = document.querySelector('#btnDraw');
const btnChoose = document.querySelector('#btnChoose');
const gameOptions = document.querySelector('#gameOptions');
const options = document.querySelector("#options");
const playerCard = document.querySelector("#playerCard");
const machineCard = document.querySelector("#machineCard");

btnChoose.disabled = true;

function updateScoreboard() {
    const scoreboard = document.querySelector('#scoreboard');
    let scoreboardResult = `Pontos: Jogador: ${playerPoints} vs ${machinePoints} Máquina`;
    scoreboard.textContent = scoreboardResult;
}
updateScoreboard();

function drawCard() {
    let ramdomCardPlayer;
    let ramdomCardMachine = parseInt(Math.random() * (listOfCards.length));
    do {
        ramdomCardPlayer = parseInt(Math.random() * (listOfCards.length));
    } while (ramdomCardPlayer == ramdomCardMachine)
    cardOfPlayer = listOfCards[ramdomCardPlayer];
    cardOfMachine = listOfCards[ramdomCardMachine];
    btnDraw.disabled = true;
    btnChoose.disabled = false;
    displayPlayerCard(cardOfPlayer);
    displayOptions(cardOfPlayer);
}

function displayPlayerCard(card) {
    playerCard.insertAdjacentHTML("afterbegin", generateCard(card));
}

function generateCard(card) {
    let cardHTML = `<h3>Nome: ${card.name}</h3>
        <img src="${card.image}" class="img-card" alt="Imagem do ${card.name}" />`
        for (attribute in card.attributes) {
            cardHTML += `<p>${attribute}  :  ${card.attributes[attribute]}</p>`;
        }
    return cardHTML;
}

function displayOptions(card) {
    for (let attribute in card.attributes){
        attributeOptions = `
        <input type="radio" id="${attribute}" name="attribute" value="${attribute}" checked />
        <label for="${attribute}"> ${attribute}: ${cardOfPlayer.attributes[attribute]}</label><br>`;
        options.insertAdjacentHTML("beforeend", attributeOptions);
    }
}

function getSelectedAttribute() {
    let radioButton = document.getElementsByName('attribute');
    let attribute = false;
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            attribute = radioButton[i].value;
        }
    }
    return attribute;
}

function displayMachineCard(card) {
    machineCard.insertAdjacentHTML("afterbegin", generateCard(card));
}

function disableAttributes() {
    let radioButton = document.getElementsByName('attribute');
    for (let i=0; radioButton.length; i++) {
        radioButton[i].disabled = true;
    }
}

function play() {
    let selectedAttribute = getSelectedAttribute();
    if (cardOfPlayer.attributes[selectedAttribute] > cardOfMachine.attributes[selectedAttribute]) {
        options.insertAdjacentHTML("beforebegin", `<h3>Você ganhou! A carta do oponente
        "${cardOfMachine.name}" tem o atributo "${selectedAttribute}" menor</h3>`);
        playerPoints++;
    } else if (cardOfPlayer.attributes[selectedAttribute] < cardOfMachine.attributes[selectedAttribute]) {
        options.insertAdjacentHTML("beforebegin", `<h3>Você perdeu! A carta do oponente
        "${cardOfMachine.name}" tem o atributo "${selectedAttribute}" maior</h3>`);
        machinePoints++;
    } else {
        options.insertAdjacentHTML("beforebegin", `<h3>Você empatou! A carta do oponente
        "${cardOfMachine.name}" tem o atributo "${selectedAttribute}" igual</h3>`);
    }
    displayMachineCard(cardOfMachine);
    btnChoose.disabled = true;
    gameOptions.insertAdjacentHTML("beforeend", `<input type="button" value="Jogar de Novo"
    class="btn-restart-game" onClick="window.location.reload()">`);
    updateScoreboard();
    disableAttributes();
}