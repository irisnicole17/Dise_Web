function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.numcelular = document.getElementById("numcelular").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.numcelular != undefined)){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " <br> Num celular: " + localStorage.numcelular;
} else {
    document.getElementById("datos").innerHTML = "No existen datos registrados";
}

}
