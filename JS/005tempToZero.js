var secondsRemaining; //Segundos
var intervalHandle; //Intervalo

function resetPage(){

	document.getElementById("inputArea").style.display = "block";

}

function tick(){ //ciclos del relog
	// grab the h1
	var timeDisplay = document.getElementById("time");

	//convertir los segundos a formato mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//agregar un cero inicial (como un String) si los segundos son menos de 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	//concatenar con columnas
	var message = min.toString() + ":" + sec;

	//Cambiar el display
	timeDisplay.innerHTML = message;

	// Terminar cuando sea igual a 0
	if (secondsRemaining === 0){
		alert("Cuenta atras finalizada!");
		clearInterval(intervalHandle);
		resetPage();
	}

	//substraer segundos
	secondsRemaining--;

}

function startCountdown(){

	function resetPage(){ // introduce datos reseteamos pagina 
		document.getElementById("inputArea").style.display = "block";
	}

	//obtener valores de la caja de minutos
	var minutes = document.getElementById("minutes").value;
	
	//comprobar si no es numero 
	if (isNaN(minutes)){
		alert("Introduce un numero");
		return; // stops function if true
	}

	// ¿Cuantos segundos?
	secondsRemaining = minutes * 60;
	
	//cada segundos llamados a la funcion tick()
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);

	// Ocultar el formulario
	document.getElementById("inputArea").style.display = "none";


}

window.onload = function(){

	// Creacion de texto box
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
	//Creamos el boton
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Empezar cuenta atras");
	startButton.onclick = function(){
		startCountdown();
	};

	//Añadimos el dom -- GRACIAS STACK OVERFLOW
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton)		

}
