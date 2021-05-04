const tabla = document.querySelector('#table');

function cargarTabla(){
	let info;
	fetch("https://carlosreneas.github.io/endpoints/cartas.json")
	.then(resultado => resultado.json())
	.then( data => {
		info = data.data.map(e => {
			return `<tr></th><td>${e.numero}</td>
			<td>${e.carta}</td>
			<td>${e.valor}</td>`;
		}).join('');
		tabla.innerHTML= info;
	}).catch (err => console.error(err));
}
cargarTabla();

function caputraDatos(){

	let tablaCarta = document.getElementById("table");
	let nuevaFila = tablaCarta.insertRow(-1);

	let nuevaCelda = nuevaFila.insertCell(0);
	nuevaCelda.textContent = document.getElementById("numero").value;
	nuevaCelda = nuevaFila.insertCell(1);
	nuevaCelda.textContent = document.getElementById("carta").value;

	nuevaCelda = nuevaFila.insertCell(2);
	nuevaCelda.textContent = 0;
}

$(document).ready(function(){
	$('#formulario').submit(function(){
		let usuario = $('#usuario').value();
		let contraseña = $('#contraseña').value();

		localStorage.setItem('usuario', usuario);
		localStorage.setItem('contraseña', contraseña);
	});
	let usuario = localStorage.getItem('usuario');
	let contraseña = localStorage.getItem('contraseña');

	if(usuario === "admin"){
		if(contraseña === 1234){
			window.location = "../index.html";
		}else{
			alert("Clave Incorrecta");
		}
	}else{
		alert("Usuario incorrecto");
	}
});