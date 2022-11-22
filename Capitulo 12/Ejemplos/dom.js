/* Fig. 12.5: dom.js */
/* Secuencia de comandos para demostrar la funcionalidad básica del DOM */
var nodoActual; //almacena el nodo actual resaltado
var cuentaid = 0; //se usa para asignar un id único a los nuevos elementos

//registrar manejadores de eventos e inicializar nodoActual
function iniciar(){
    document.getElementById("botonPorId").addEventListener("click", porId, false);
    document.getElementById("botonInsertar").addEventListener("click", insertar, false);
    document.getElementById("botonAdjuntar").addEventListener("click", adjuntarNodo, false);
    document.getElementById("botonReemplazar").addEventListener("click", reemplazarActual, false);
    document.getElementById("botonEliminar").addEventListener("click", eliminar, false);
    document.getElementById("botonPadre").addEventListener("click", padre, false);

    //inicializar nodoActual
    nodoActual = document.getElementById("encabezadogrande");
}

//llamar a iniciar después de que se carga la ventana
window.addEventListener("load", iniciar, false);

//obtener y resaltar un elemento en base a su atributo id
function porId(){
    var id = document.getElementById("gbi").value;
    var destino = document.getElementById(id);

    if( destino )
        cambiarA( destino );
}

//insertar un elemento párrafo antes del elemento actual
//usando el método insertBefore
function insertar(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("ins").value);
    nodoActual.parentNode.insertBefore(nuevoNodo, nodoActual);
    cambiarA(nuevoNodo);
}

//adjuntar un nodo párrafo como hijo del nodo actual
function adjuntarNodo(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("adjuntar").value);
    nodoActual.appendChild(nuevoNodo);
    cambiarA(nuevoNodo);
}

//reemplazar el nodo actual seleccionado con un nodo párrafo
function reemplazarActual(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("reemplazar").value);
    nodoActual.parentNode.replaceChild(nuevoNodo, nodoActual);
    cambiarA(nuevoNodo);
}

//eliminar el nodo actual
function eliminar(){
    if(nodoActual.parentNode == document.body)
        alert("No se puede eliminar un elemento de nivel superior.");
    else{
        var nodoAnterior = nodoActual;
        cambiarA(nodoAnterior.parentNode);
        nodoActual.removeChild(nodoAnterior);
    }
}

//obtener y resaltar el padre del nodo actual
function padre(){
    var destino = nodoActual.parentNode;

    if(destino != document.body)
        cambiarA(destino);
    else
        alert("No hay padre.");
}

//función ayudante que devuelve un nuevo nodo párrafo que contiene
//un id único y de texto dado
function crearNuevoNodo(texto){
    var nuevoNodo = document.createElement("p");
    ipNodo = "nuevo" + cuentaid;
    ++cuentaid;
    nuevoNodo.setAttribute("id", ipNodo); //establecer id de nuevoNodo
    texto = "[" + ipNodo + "] " + texto;
    nuevoNodo.appendChild(document.createTextNode(texto));
    return nuevoNodo;
}

//función ayudante que cambiar a un nuevo nodoActual
function cambiarA(nuevoNodo){
    nodoActual.setAttribute("class", ""); //elimina el resaltado anterior
    nodoActual = nuevoNodo;
    nodoActual.setAttribute("class", "highlighted"); //resalta
    document.getElementById("gbi").value = nodoActual.getAttribute("id");
}