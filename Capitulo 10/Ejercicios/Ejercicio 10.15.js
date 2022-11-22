//Script para el ejercicio 10.15

//matriz de dibujo
let piso = new Array(20);
for(var x = 0; x < 20; x++){
    piso[x] = new Array(20);
}

//lista de comandos
let lista = [];

//valor de pluma, por defecto arriba(1)
let upDown = 1;
//direción a donde está viendo la tortuga (0_arriba; 1_derecha; 2_abajo; 3_izquierda)
let direc = 1;

//posicion de la tortuga anterior
let FTortuga = 0, CTortuga = 0;
//posicion nueva
let nFTortuga = 0, nCTortuga = 0;

var Ejecutar, Pluma, Girar, Avanzar, Imprimir, Final, Reiniciar;

function reinicar(){
    for(var x = 0; x < 20; x++){
        for(var y = 0; y < 20; y++){
            piso[x][y] = 0;
        }
    }
    FTortuga = 0;
    CTortuga = 0;
    nFTortuga = 0;
    nCTortuga = 0;
    direc = 1;
    upDown = 1;
    lista = [];
    Pluma.disabled = false;
    Girar.disabled = false;
    Avanzar.disabled = false;
    Imprimir.disabled = false;
    Final.disabled = false;
    Ejecutar.disabled = true;
    Reiniciar.disabled = true;
    
    listaComandos.innerHTML = "";
    resultado.innerHTML = "";
    document.getElementById("finDibujo").innerHTML = "";

    imprimirMatriz();
}
function iniciar(){
    Pluma = document.getElementById("agregarPluma");
    Girar = document.getElementById("agregarGiro");
    Avanzar = document.getElementById("avanzarEspacios");
    Imprimir = document.getElementById("imprimir");
    Final = document.getElementById("final");

    Ejecutar = document.getElementById("ejecutar");

    Reiniciar = document.getElementById("reiniciar");

    Ejecutar.disabled = true;
    Reiniciar.disabled = true;

    var listaComandos = document.getElementById("listaComandos");
    var resultado = document.getElementById("resultado");

    Pluma.addEventListener("click", agregarPluma, false);
    Girar.addEventListener("click", agregarGirar, false);
    Avanzar.addEventListener("click", agregarAvanzar, false);
    Imprimir.addEventListener("click", agregarImprimir, false);
    Final.addEventListener("click", agregarFinal, false);

    reinicar();
    
    Ejecutar.addEventListener("click", ejecutarComandos, false);
    Reiniciar.addEventListener("click", reinicar, false);
}

function seleccionado(nombre){
    for(let i = 1; i <= 2; i++){
        if(document.getElementById(nombre+i).checked){
            return document.getElementById(nombre+i);
        }
    }
}

function agregarPluma(){
    var selec = seleccionado("pluma").value
    listaComandos.innerHTML += "" + selec + "<br>";
    lista.push(selec);
}
function agregarGirar(){
    var selec = seleccionado("giro").value
    listaComandos.innerHTML += "" + selec + "<br>";
    lista.push(selec);
}
function agregarAvanzar(){
    var campoAvanzar = document.getElementById("campoAvanzar");
    var espacios = parseInt(campoAvanzar.value);
    
    if(espacios > 0){
        listaComandos.innerHTML += "5, " + espacios + "<br>";
        espacios = "5" + espacios;
        lista.push(espacios);
    }
    
}
function agregarImprimir(){
    listaComandos.innerHTML += "" + 6 + "<br>";
    lista.push(6);
}
function agregarFinal(){
    listaComandos.innerHTML += "" + 9 + "<br>";
    lista.push(9);
    Ejecutar.disabled = false;
}

function ejecutarComandos(){
    Pluma.disabled = true;
    Girar.disabled = true;
    Avanzar.disabled = true;
    Imprimir.disabled = true;
    Final.disabled = true;
    Ejecutar.disabled = true;
    Reiniciar.disabled = false;

    var valor = "";
    var temp = 0;
    for(var comando in lista){
        valor = lista[comando].toString();
        switch(true){
            case valor == "1":
                upDown = 1;
                break;
            case valor == "2":
                upDown = 2;
                break;
            case valor == "3":
                if(direc == 3) direc = 0;
                else direc++;
                break;
            case valor == "4":
                if(direc == 0) direc = 3;
                else direc--;
                break;
            case valor[0] == "5":
                temp = parseInt(valor.slice(1));
                avanzar(temp);
                break;
            case valor == "6":
                imprimirMatriz();
                break;
            case valor == "9":
                finProceso();
                break;
        }
    }
}

function avanzar(casillas){
    switch(direc){
        case 0: //arriba
            if(FTortuga - casillas < 0) nFTortuga = 0;
            else nFTortuga = FTortuga - casillas;
            dibujar();
            break;
        case 1: //derecha
            if(CTortuga + casillas > 19) nCTortuga = 19;
            else nCTortuga = CTortuga + casillas;
            dibujar();
            break;
        case 2: //abajo
            if(FTortuga + casillas > 19) nFTortuga = 19;
            else nFTortuga = FTortuga + casillas;
            dibujar();
            break;
        case 3: //izquierda
            if(CTortuga - casillas < 0) nCTortuga = 0;
            else nCTortuga = CTortuga - casillas;
            dibujar();
            break;
    }


}

function dibujar(){
    switch(direc){
        case 0: //arriba
            for(var fila in piso){
                if(fila <= FTortuga && fila >= nFTortuga){
                    if(upDown == 2){
                        piso[fila][CTortuga] = 1;
                    }
                }
            }
            CTortuga = nCTortuga;
            FTortuga = nFTortuga;
            break;
        case 1: //derecha
            for(var col in piso){
                if(col >= CTortuga && col <= nCTortuga){
                    if(upDown == 2){
                        piso[FTortuga][col] = 1;
                    }
                }
            }
            CTortuga = nCTortuga;
            FTortuga = nFTortuga;
            break;
        case 2: //abajo
            for(var fila in piso){
                if(fila >= FTortuga && fila <= nFTortuga){
                    if(upDown == 2){
                        piso[fila][CTortuga] = 1;
                    }
                }
            }
            CTortuga = nCTortuga;
            FTortuga = nFTortuga;
            break;
        case 3: //izquierda
            for(var col in piso){
                if(col <= CTortuga && col >= nCTortuga){
                    if(upDown == 2){
                        piso[FTortuga][col] = 1;
                    }
                }
            }
            CTortuga = nCTortuga;
            FTortuga = nFTortuga;
            break;
    }
}

function imprimirMatriz(){
    var tabla = "<table><thead>";
    for(var i = 0; i < 20; i++){
        tabla += "<th>" + i + "</th>";
    }
    tabla += "</thead><tbody>"
    for(var x = 0; x < 20; x++){
        tabla += "<tr>";
        for(var y = 0; y < 20; ++y){
            if(piso[x][y] == 0)
                tabla += "<td>&emsp;</td>";
            else
                tabla += "<td>*</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tbody></table>";

    resultado.innerHTML = tabla;
}

function finProceso(){
    document.getElementById("finDibujo").innerHTML = "Fin";
}

window.addEventListener("load", iniciar, false);
