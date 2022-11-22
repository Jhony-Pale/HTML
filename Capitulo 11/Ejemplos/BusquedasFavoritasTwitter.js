// Fig. 11.19: BusquedasFavoritasTwitter.js 
// Almacenamiento y recuperación de pares clave/valor mediante el uso de 
// local Storage y sessionStorage de HTML5

var etiquetas; 

// Carga las búsquedas etiquetadas anteriormente y las muestra en la página
function cargarBusquedas() 
{
    console.log(window.sessionStorage.getItem( "aquiPreviamente" ) );
   if ( !window.sessionStorage.getItem( "aquiPreviamente" ) )
   {
      sessionStorage.setItem( "aquiPreviamente", "true" );
      document.getElementById( "mensajeBienvenida" ).innerHTML = "Bienvenido a la App de Búsquedas favoritas de Twitter";
   } //Fin de if

   var longitud = localStorage.length; //números de pares clave-valor
   etiquetas = []; //Crear un arreglo vacío

   //Cargar todas las claves
   for (var i = 0; i < longitud; ++i) 
   {
      etiquetas[i] = localStorage.key(i);
   } //Fin de for

   etiquetas.sort(); //Ordenar las claves

   var marcado = "<ul>"; // se usa para almacenar el marcado de los vínculos de búsqueda
   var url = "http://search.twitter.com/search?q=";

   //Crear lista de vínculos
   for (var etiqueta in etiquetas) 
   {
      var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
      marcado += "<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] + 
         "</a></span>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " + 
            "value = 'Editar' onclick = 'editarEtiqueta(id)'>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " + 
            "value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
   } //Fin de for

   marcado += "</ul>";
   document.getElementById("busquedas").innerHTML = marcado;
} //Fin de la función cargarBusquedas

// elimina todos los pares clave-valor de localStorage
function borrarTodasLasBusquedas() 
{
   localStorage.clear();
   cargarBusquedas(); 
} 

// guarda una búsqueda recién etiquetada en localStorage
function guardarBusqueda() 
{
   var consulta = document.getElementById("consulta");
   var etiqueta = document.getElementById("etiqueta");
   localStorage.setItem(etiqueta.value, consulta.value); 
   etiqueta.value = ""; 
   consulta.value = "";
   cargarBusquedas();
} 

// elimina un par clave-valor especifico de localStorage
function eliminarEtiqueta( etiqueta ) 
{
   localStorage.removeItem( etiqueta );
   cargarBusquedas(); 
} 

// mostrar la consulta etiquetada existente para editarla
function editarEtiqueta( etiqueta )
{
   document.getElementById("consulta").value = localStorage[ etiqueta ];
   document.getElementById("etiqueta").value = etiqueta;   
   cargarBusquedas();
}

// registrar manejadores de eventos y luego cargar búsquedas
function iniciar()
{
   var botonGuardar = document.getElementById( "botonGuardar" );
   botonGuardar.addEventListener( "click", guardarBusqueda, false );
   var botonBorrar = document.getElementById( "botonBorrar" );
   botonBorrar.addEventListener( "click", borrarTodasLasBusquedas, false );
   cargarBusquedas(); // load the previously saved searches
} // end function start

window.addEventListener( "load", iniciar, false );