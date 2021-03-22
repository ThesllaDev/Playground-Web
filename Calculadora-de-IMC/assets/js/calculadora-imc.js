function calcularIMC() {
	var alturaDoUsuario = document
		.getElementById("altura")
		.value.replace(/,/g, ".");
	var pesoDoUsuario = document.getElementById("peso").value.replace(/,/g, ".");

	if (pesoDoUsuario == "" || alturaDoUsuario == "") {
		document.getElementById("message").innerHTML = "Preencha os campos";
		return false;
	}

	var imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);
	var message = "";

	if (imcDoUsuario < 17) {
		message = "Você está muito abaixo do peso";
	} else if (imcDoUsuario >= 17 && imcDoUsuario <= 18.49) {
		message = "Você está abaixo do peso";
	} else if (imcDoUsuario >= 18.5 && imcDoUsuario <= 24.99) {
		message = "Seu peso está normal";
	} else if (imcDoUsuario >= 25 && imcDoUsuario <= 29.99) {
		message = "Você está acima do peso";
	} else if (imcDoUsuario >= 30 && imcDoUsuario <= 34.99) {
		message = "Você tem obesidade nível I";
	} else if (imcDoUsuario >= 35 && imcDoUsuario <= 39.99) {
		message = "Você tem Obesidade nível II";
	} else if (imcDoUsuario >= 40) {
		message = "Você tem Obesidade nível III";
	}

	imcDoUsuario = imcDoUsuario.toFixed(2).replace(/\./g, ",");
	document.getElementById("message").innerHTML =
		"Seu IMC é : " + imcDoUsuario + "<br>" + message;
}