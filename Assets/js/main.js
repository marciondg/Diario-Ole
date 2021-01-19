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

function reemplazarTexto(etiqueta="h1",numero = "0", texto = "") {
    if (texto === "") {
        console.log("No se ingreso texto")
    } else {
        let etiquetas = document.getElementsByTagName(etiqueta);
        etiquetas[numero].innerHTML = texto;
    }
}

/* Objetos */
//1)
function Fruta(nombre,precio,peso,cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.cantidad = cantidad;
}
//2)
let banana = new Fruta("banana",100,3,10);
let manzana = new Fruta("manzana",90,4,20);
let melon = new Fruta("melon",200,8,5);

let frutas = [banana,manzana,melon];

function eliminarFruta(coleccionFrutas,posicion){
    let frutasAux = [];
    for (fruta of coleccionFrutas){
        if(coleccionFrutas.indexOf(fruta) !=posicion){
            frutasAux.push(fruta);
        }
    }
    console.log(frutasAux);
}

let nombres = ["marcio","nicolas","david"];
function recorrerArray(array){
    for(let elementoArray of array){
        console.log(elementoArray)
    }
}

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1

//Crear lista desordenada
let armarLista = function(){
    let ul = document.getElementById("lista-desordenada");
    for(fruta of frutas){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${fruta.Nombre} ${fruta.Precio} ${fruta.Peso}`))
        ul.appendChild(li);
    }
}