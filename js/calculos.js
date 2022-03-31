// Definir variables
// var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

//Función para leer texto
function leerTexto() {
    texto = prompt("Porfi, escribe el nombre de tu personaje");
    return texto;
}

//Función para mostrar texto
function mostrarTexto( id, texto) {
    var elemento = document.getElementById(id);
    //Insertamos el texto pasado por parámetro 
    //al elemento con id pasado por parámetro
    elemento.innerHTML = texto;
}

function mostrarInfo(id, tag, info, texto) {
    //var elemento = document.getElementById(id);
    var etiqueta = "<" + tag + ">";
    etiqueta += info;
    etiqueta += "</" + tag + "> ";
    etiqueta += texto;
   
    //elemento.innerHTML = etiqueta;
    mostrarTexto(id, etiqueta);

}

//function dameInfo(id, tag, info, texto) {
    //var elemento = document.getElementById(id);
   // var etiqueta = "<" + tag + ">";
    //etiqueta += info;
    //etiqueta += "</" + tag + "> ";
    //etiqueta += texto;

    //return contenido;
  

//}

function mostrarTodo(id, personaje, aldea, clan, superpoder, vida) {
    var li = "<li>"
    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea =  "<strong>Aldea: </strong>" + aldea;
    var clan =  "<strong>Clan: </strong>" + clan;
    var superpoder = "<strong>Superpoder: </strong>" + sp;
    var vida = "<strong>Vidas: </strong>" + vida;
    //contenido = dameInfo('strong', 'Personaje: ', personaje);
    //es otra manera de hacerlo con el dameInfo

    var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + superpoder + "</li>";
    lis += "<li>" + vida + "</li>";

    var elemento = document.getElementById(id);
    //Insertamos el texto pasado por parámetro 
    //al elemento con id pasado por parámetro
    elemento.innerHTML = lis;

}



function mostrarMultiplos(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
}


function mostrarFactorial( nf ) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial( nf );
}


function mostrarResultados(op, n1, n2 = 0 ) {

    switch (op) {
        case 'multiplo':
            var td11 = document.getElementById('td11');
            td11.innerHTML = n;
            document.getElementById('td12').innerHTML = n2;
            document.getElementById('td13').innerHTML = multiplosDeHasta(n1, n2);
        
        break;

        case 'factorial':
            document.getElementById('td21').innerHTML = n1;
    document.getElementById('td22').innerHTML = factorial(n1);
    
        break;

        default:
    }
}



function multiplosDeHasta(n, m) {
    mensaje = "Los múltiplo de " +
        n +
        " hasta " + m +
        " son: ";

    multiplo = 0;
    for (i = 1; multiplo < m; i++) {
      multiplo = n * i;
        mensaje = mensaje + multiplo + " ";
    }

    //Iniciaizacion de la variable contador
    i = 1;

    //Condición
    while (multiplo < m) {
        multiplo = n * 1;
        mensaje = mensaje + multiplo + " ";

        //Incremento
        i++;
    }


    return mensaje;
}

function factorial( nf ) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}

function sumar(s1, s2){
    var suma = s1 + s2;
    return suma;
}

function multiplicar(f1, f2){
    var producto = f1 * f2;
    return producto;
}