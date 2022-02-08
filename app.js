const subm = document.getElementById('contactoButton');

subm.addEventListener('submit', enviar);

function enviar(e) {
	e.prevntDefault();
}
