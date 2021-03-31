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

const btnDraw = document.querySelector('#btnDraw');
const btnChoose = document.querySelector('#btnChoose');

btnChoose.disabled = true;

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
}