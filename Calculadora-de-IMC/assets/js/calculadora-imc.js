function calcularIMC() {
	const alturaDoUsuario = document.querySelector('#altura').value.replace(/,/g, ".");
	const pesoDoUsuario = document.querySelector('#peso').value.replace(/,/g, ".");
	const message = document.querySelector('#message');

	if (pesoDoUsuario === "" || alturaDoUsuario === "") {
		message.textContent = "Preencha os campos";
		return false;
	}

	let imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

	if (imcDoUsuario < 17) {
		message.textContent = "Você está muito abaixo do peso";
	} else if (imcDoUsuario >= 17 && imcDoUsuario <= 18.49) {
		message.textContent = "Você está abaixo do peso";
	} else if (imcDoUsuario >= 18.5 && imcDoUsuario <= 24.99) {
		message.textContent = "Seu peso está normal";
	} else if (imcDoUsuario >= 25 && imcDoUsuario <= 29.99) {
		message.textContent = "Você está acima do peso";
	} else if (imcDoUsuario >= 30 && imcDoUsuario <= 34.99) {
		message.textContent = "Você tem obesidade nível I";
	} else if (imcDoUsuario >= 35 && imcDoUsuario <= 39.99) {
		message.textContent = "Você tem Obesidade nível II";
	} else if (imcDoUsuario >= 40) {
		message.textContent = "Você tem Obesidade nível III";
	}

	imcDoUsuario = imcDoUsuario.toFixed(2).replace(/\./g, ",");
	message.insertAdjacentHTML('afterbegin', `Seu IMC é : ${imcDoUsuario} </br>`);
}