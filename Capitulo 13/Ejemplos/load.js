/* Fig. 13.2: load.js */
/* Secuencia de comandos para demostrar el evento load. */
var segundos = 0;

//se invoca al cargarse la página para iniciar el temporizador
function iniciarTemporizador(){
    window.setInterval("actualizarTiempo()", 1000);
}

//se invoca cada 1000ms para actualizar el temporizador
function actualizarTiempo(){
    ++segundos;
    document.getElementById("hastaAhora").innerHTML = segundos;
}

window.addEventListener("load", iniciarTemporizador, false);