var moviesName = ["2 Filhos de Francisco: A História de Zezé di Camargo & Luciano", "À Espera De Um Milagre", "Cidade de Deus", "Meu Nome Não É Johnny", "Moonlight: Sob a Luz do Luar", "O Auto da Compadecida", "O Homem que Copiava", "O Poderoso Chefão", "Tropa de Elite", "Tropa de Elite 2: O Inimigo Agora é Outro"];
var moviesPosters = ["https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nopSuvnKUMZnybxxg9VmZGPJM27.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iye7Fwd0puLTPwxsuHrL1YczeGu.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pA70WUs7KHiHltfiBN4XEELOXcS.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9G1voavqsLFx0k66PXw11AUUaj.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AekOkoT88EhDHikUQXQcKri2q4B.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1wLs0uKBrJEfex534aX2dat7D5U.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eYTZoNEWbHPD2ujjdhdlpvbSYdr.jpg", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8G7F938AHqBBLc5yJXPUJhSJzN5.jpg"]
var trailers = ["https://www.youtube.com/watch?v=aPrDVKf8u-A", "https://www.youtube.com/watch?v=Ulv7IKP1AbI", "https://www.youtube.com/watch?v=nBWtTrLxUjM", "https://www.youtube.com/watch?v=0uFXVu3lV_c", "https://www.youtube.com/watch?v=cYFIBxizOW0", "https://www.youtube.com/watch?v=XPuMu_ENzlg", "https://www.youtube.com/watch?v=-HILhhhGb9w", "https://www.youtube.com/watch?v=y_-YWEot_7w", "https://www.youtube.com/watch?v=uZBiNJQxtGw", "https://www.youtube.com/watch?v=5tG4i8elT3I"]
const listOfFilms = document.getElementById('listOfFilms');

for (var i = 0; i < moviesName.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(moviesName[i]));
    li.setAttribute("class", "item");
    listOfFilms.appendChild(li);
}

var wishList = [];

function addMovie() {
    const movieNumber = document.getElementById('movieNumber').value - 1;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.color = 'red';
    errorMessage.style.fontWeight = 'bold';

    valueVerification();
    function valueVerification() {
        if (movieNumber >= 0 && movieNumber < 10) {
            if (wishList.includes(movieNumber.toString())) {
                errorMessage.textContent = "Este filme já está adicionado a lista de desejo, escolha outro";
                setTimeout(function (){ errorMessage.textContent = ""}, 3000);
            } else {
                wishList.push(movieNumber.toString());
                const cardMovie = document.getElementById('wishlist');
                var card = document.createElement('div');
                card.setAttribute("class", "card-movie");
                cardMovie.appendChild(card);
                var figure = document.createElement('figure');
                figure.setAttribute("class", "movie-figure");
                var figureCaption = document.createElement('figcaption');
                figureCaption.setAttribute("class", "movie-title");
                figureCaption.textContent = moviesName[movieNumber];
                figure.appendChild(figureCaption);
                var movieImages = document.createElement('img');
                movieImages.setAttribute("class", "movie-poster");
                movieImages.setAttribute("src", moviesPosters[movieNumber]);
                movieImages.setAttribute("alt", moviesName[movieNumber]);
                movieImages.setAttribute("title", moviesName[movieNumber]);
                figure.appendChild(movieImages);
                card.appendChild(figure);
                var linkTrailer = document.createElement('a');
                linkTrailer.setAttribute("href", trailers[movieNumber]);
                linkTrailer.setAttribute("class", "btn-trailer");
                linkTrailer.setAttribute("title", `Trailer do filme ${moviesName[movieNumber]}`);
                linkTrailer.setAttribute("target", "_blank");
                linkTrailer.textContent = "Trailer do filme";
                card.appendChild(linkTrailer);
            }
        } else {
            errorMessage.textContent = "Digite um número de 1 a 10";
        }
    }
}