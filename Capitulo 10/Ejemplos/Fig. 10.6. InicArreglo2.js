// Fig. 10.6. InicArreglo2.js
// Inicialización de arreglos con listas inicializadoras.
function iniciar()
{
// La lista de inicializadores especifica el número de elementos y
// un valor para cada elemento.
   var colores = new Array( "cyan", "magenta","amarillo", "negro" ); 
   var enteros1 = [ 2, 4, 6, 8 ];                                
   var enteros2 = [ 2, , , 8 ];                                  

   imprimirArreglo( "El arreglo colores contiene", colores, 
      document.getElementById( "salida1" ) );
   imprimirArreglo( "El arreglo enteros1 contiene", enteros1, 
      document.getElementById( "salida2" ) );
   imprimirArreglo( "El arreglo enteros2 contiene", enteros2, 
      document.getElementById( "salida3" ) );
} // fin de la función iniciar

// imprimir el encabezado seguido de una tabla de dos columnas
// que contienen indices y elementos de "elArreglo".  
function imprimirArreglo( encabezado, elArreglo, salida )
{
   var contenido = "<h2>" + encabezado + "</h2><table>" +
      "<thead><th>Indice</th><th>Valor</th></thead><tbody>";

// Imprime el indice y el valor de cada elemento del arreglo
      var longitud = elArreglo.length; // obtiene la longitud del arreglo una vez después del ciclo

   for ( var i = 0; i < longitud; ++i )   
   {
      contenido += "<tr><td>" + i + "</td><td>" + elArreglo[ i ] + 
         "</td></tr>";
   } // fin de for

   contenido += "</tbody></table>";
   salida.innerHTML = contenido; // colocar la tabla en el elemento salida
} // fin de la función imprimirArreglo

window.addEventListener( "load", iniciar, false );