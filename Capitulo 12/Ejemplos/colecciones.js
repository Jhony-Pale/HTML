/* Fig. 12.14. colecciones.js */
/* Secuencia de comandos para demostrar el uso de la colección links. */
function procesarVinculos(){
    var listaVinculos = document.links; //obtener los vinculos del documento
    var contenido = "<ul>";

    //concatenar cada vinculo a contenido
    for(var i = 0; i < listaVinculos.length; ++i){
        var vinculoActual = listaVinculos[i];
        if(vinculoActual.childElementCount == 0)
            contenido += "<li><a href='" + vinculoActual.href + "'>" + vinculoActual.innerHTML + "</li>";
    }

    contenido += "</ul>";
    document.getElementById("vinculos").innerHTML = contenido;
}

window.addEventListener("load", procesarVinculos, false);