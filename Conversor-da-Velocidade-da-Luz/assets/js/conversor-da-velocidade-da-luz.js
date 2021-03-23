function converterValores() {
    var quantidadeAnosLuz = document.getElementById('anosLuz').value;
    var distanciaEmKM = (quantidadeAnosLuz * 300000 * 31536000);
    document.getElementById('message').innerHTML = 'A distância convertida é de aproximadamente: ' + distanciaEmKM.toLocaleString('pt-BR') + '<abbr title="Quilômetros">KM</abbr>';
};