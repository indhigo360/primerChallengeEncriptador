var btnEncode = document.getElementById("btn-encriptar");

function encriptar(texto){
	if (texto.match(/[^a-z\s]/)) {
        return alert("Escriba el texto solo minúsculas y sin acentos");
    }

    var resultado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");
    return resultado;
}

btnEncode.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = encriptar(texto);
	document.getElementById("msg").value = texto;
});