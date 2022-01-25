var btnDecode = document.getElementById("btn-desencriptar");

function desencriptar(texto){
	if (texto.match(/[^a-z\s]/)) {
        return alert("Solo puedes desencriptar textos en minúsculas y sin acentos");
    }

    var resultado = texto.replace(/(enter)/ig, "e").replace(/(imes)/ig, "i").replace(/(ai)/ig, "a").replace(/(ober)/ig, "o").replace(/(ufat)/ig, "u");
    return resultado;
}

btnDecode.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = desencriptar(texto);
	document.getElementById("msg").value = texto;
});
