const select = document.querySelector('#types');
const imgPokemon = document.querySelector('#imgPokemon');
const infoPokemon = document.querySelector('#infoPokemon');
const typePokemon = document.querySelector('#type');

function change() {
    let valueType = select.options[select.selectedIndex].value;
    switch (valueType) {
        case "Water":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Vaporeon');
            infoPokemon.textContent = 'Quando as barbatanas de Vaporeon começam a vibrar, é um sinal de que a chuva virá dentro de algumas horas. A estrutura celular de seu corpo é semelhante à composição molecular da água. Ele pode se tornar invisível na água.';
            typePokemon.textContent = 'Água';
            typePokemon.setAttribute('class', 'type type-water');
            break;
        case "Electric":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Jolteon');
            infoPokemon.textContent = 'Se ele estiver com raiva ou assustado, o pelo de todo o corpo eriçar-se-á como agulhas afiadas que perfuram os inimigos. Ele acumula íons negativos na atmosfera para lançar raios de 10.000 volts.';
            typePokemon.textContent = 'Elétrico';
            typePokemon.setAttribute('class', 'type type-electric');
            break;
        case "Fire":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Flareon');
            infoPokemon.textContent = 'Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode chegar a até 1.700 graus Fahrenheit. Ele armazena parte do ar que inala em sua bolsa de chama interna, que o aquece a mais de 3.000 graus Fahrenheit.';
            typePokemon.textContent = 'Fogo';
            typePokemon.setAttribute('class', 'type type-fire');
            break;
        case "Psychic":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Espeon');
            infoPokemon.textContent = 'Ao ler as correntes de ar, ele pode prever coisas como o clima ou o próximo movimento de seu inimigo. Ele libera o poder psíquico do orbe em sua testa. Quando seu poder se esgota, o orbe fica opaco e escuro.';
            typePokemon.textContent = 'Psíquico';
            typePokemon.setAttribute('class', 'type type-psychic');
            break;
        case "Dark":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Umbreon');
            infoPokemon.textContent = 'Quando este Pokémon fica com raiva, seus poros secretam um suor venenoso, que espirra nos olhos do oponente. Na noite de lua cheia, ou quando fica excitado, os padrões dos anéis em seu corpo brilham em amarelo.';
            typePokemon.textContent = 'Sombrio';
            typePokemon.setAttribute('class', 'type type-dark');
            break;
        case "Grass":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Leafeon');
            infoPokemon.textContent = 'As galerias preferem o aroma distinto que vem das folhas deste Pokémon. Existe um perfume popular feito com esta essência. A cauda deste Pokémon é afiada como uma lâmina, com uma ponta cortante fantástica que pode cortar árvores grandes.';
            typePokemon.textContent = 'Planta';
            typePokemon.setAttribute('class', 'type type-grass');
            break;
        case "Ice":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Glaceon');
            infoPokemon.textContent = 'Qualquer um que se tornar cativado pela beleza da neve que Glaceon cria será congelado antes que perceba. O frio que emana de Glaceon causa a formação de neve, tornando-o um Pokémon muito popular em estações de esqui.';
            typePokemon.textContent = 'Gelo';
            typePokemon.setAttribute('class', 'type type-ice');
            break;
        case "Fairy":
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Sylveon');
            infoPokemon.textContent = 'Ao liberar ondas de apagamento de inimizade de sua fita como antenas, Sylveon interrompe qualquer conflito. Há um conto de fadas de Galarian que descreve um belo Sylveon derrotando um terrível Pokémon dragão.';
            typePokemon.textContent = 'Fada';
            typePokemon.setAttribute('class', 'type type-fairy');
            break;
        default:
            imgPokemon.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png';
            imgPokemon.setAttribute('alt', 'ilustração do Pokémon Eevee');
            infoPokemon.textContent = 'Ele tem a capacidade de alterar a composição de seu corpo para se adequar ao ambiente. Graças à sua composição genética instável, este Pokémon especial esconde muitas evoluções diferentes possíveis.';
            typePokemon.textContent = 'Normal';
            typePokemon.setAttribute('class', 'type type-normal');
            break;
    }
}