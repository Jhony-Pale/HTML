// Fig. 11.7. BuscarCadenas.js
// Búsqueda en cadenas con indexOf y lastIndexOf.

var letras = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function botonPresionado(){
    var campoEntrada = document.getElementById("campoEntrada");

    document.getElementById("resultados").innerHTML = 
    "<p>La primera ocurrencia se encuentra en el índice " + 
    letras.indexOf(campoEntrada.value) + "</p>" + 
    "<p>La última ocurrencia se encuentra en el índice " + 
    letras.lastIndexOf(campoEntrada.value) + "</p>" +
     "<p>La primera ocurrencia del índice 12 se encuentra en el índice " + 
     letras.indexOf(campoEntrada.value, 12) + "</p>" + 
     "<p>La última ocurrencia del índice 12 se encuentra en el índice " + 
     letras.lastIndexOf(campoEntrada.value, 12) + "</p>";
} //Fin de la función botonPresionado

//registrar manjeador de evento click para botonBuscar
function iniciar(){
    var botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", botonPresionado, false);
} //Fin de la función botonPresionado

window.addEventListener("load", iniciar, false);