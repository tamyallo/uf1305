// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarResultados() {
    document.getElementById('td1').innerHTML = n;
    document.getElementById('td2').innerHTML = factorial();
}

function factorial() {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}
