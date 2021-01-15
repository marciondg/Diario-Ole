function saludo(nombre, apellido, edad) {
    var nombre = nombre || "Marcio";
    var apellido = apellido || "Garozzo";
    var edad = edad || "23";
    console.log("Hola soy", nombre, apellido, "y tengo", edad, "años");
}
// es6+
function saludo2(nombre = "Marcio", apellido = "Garozzo", edad = "23") {
    console.log("Hola soy", nombre, apellido, "y tengo", edad, "años");
}

function concatenar() {
    let star = "Star";
    let wars = "Wars";
    let pelicula = star + " " + wars;
    console.log(pelicula);
}

//es6+
function concatenar2() {
    let star = "Star";
    let wars = "Wars";
    let pelicula = `${star} ${wars}`;
    console.log(pelicula);
}

/* --------------- Funciones que trabajan con el DOM --------------- */

function reemplazarParrafo(numero = "0", texto = "") {
    if (texto === "") {
        console.log("No se ingreso texto")
    } else {
        let parrafos = document.getElementsByTagName("p");
        parrafos[numero].innerHTML = texto;
    }
}