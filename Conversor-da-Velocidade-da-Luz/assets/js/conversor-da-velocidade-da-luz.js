function converterValores() {
    const quantidadeAnosLuz = document.querySelector('#anosLuz').value;
    const message = document.querySelector('#message');
    message.textContent = "";
    let distanciaEmKM = (quantidadeAnosLuz * 300000 * 31536000);
    message.insertAdjacentHTML('afterbegin', `A distância convertida é de aproximadamente:
    ${distanciaEmKM.toLocaleString('pt-BR')} <abbr title="Quilômetros">KM</abbr>`);
};