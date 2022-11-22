/*
    Fig. 13.9: focusblur.js
    Demostración de los eventos focuus y blur.
*/
var arregloAyuda = [
    "Escriba su nombre en este cuadro de entrada.",
    "Escriba su dirección de e-mail en el formato usuario@dominio.",
    "Marque esta casilla si le gustó nuestro sitio.",
    "Escriba aquí los comentarios para que nosotros los leamos.",
    "Este botón envía el formulario a la secuencia de comandos del lado servidor.",
    "Este botón borra el formulario.",
    ""
];
var textoAyuda;

//inicializar textoAyudaDiv y registrar los manejadores de eventos
function inic(){
    textoAyuda = document.getElementById("textoAyuda");

    //registrar componentes de escucha
    registrarEscuchas(document.getElementById("nombre"), 0);
    registrarEscuchas(document.getElementById("email"), 1);
    registrarEscuchas(document.getElementById("gusta"), 2);
    registrarEscuchas(document.getElementById("comentarios"), 3);
    registrarEscuchas(document.getElementById("enviar"), 4);
    registrarEscuchas(document.getElementById("reiniciar"), 5);

    var miFormulario = document.getElementById("miFormulario");
    miFormulario.addEventListener("submit",
        function(){
            return confirm("¿Seguro que desea enviar el formulario?");
        }, false);
    miFormulario.addEventListener("reset",
        function(){
            return confirm("¿Seguro que desea reiniciar el formulario?");
        }, false);
}

//función utilitaria para ayudar a registrar eventos
function registrarEscuchas(objeto, numeroMensaje){
    objeto.addEventListener("focus", function(){
        textoAyuda.innerHTML = arregloAyuda[numeroMensaje];
    }, false);
    objeto.addEventListener("blur", function(){
        textoAyuda.innerHTML = arregloAyuda[6];
    }, false);
}

window.addEventListener("load", inic, false);