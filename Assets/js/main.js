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

function reemplazarTexto(etiqueta = "h1", numero = "0", texto = "") {
    if (texto === "") {
        console.log("No se ingreso texto")
    } else {
        let etiquetas = document.getElementsByTagName(etiqueta);
        etiquetas[numero].innerHTML = texto;
    }
}

/* Objetos */
//1)
function Fruta(nombre, precio, peso, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.peso = peso;
    this.cantidad = cantidad;
}
//2)
let banana = new Fruta("banana", 100, 3, 10);
let manzana = new Fruta("manzana", 90, 4, 20);
let melon = new Fruta("melon", 200, 8, 5);

let frutas = [banana, manzana, melon];

function eliminarFruta(coleccionFrutas, posicion) {
    let frutasAux = [];
    for (fruta of coleccionFrutas) {
        if (coleccionFrutas.indexOf(fruta) != posicion) {
            frutasAux.push(fruta);
        }
    }
    console.log(frutasAux);
}

let nombres = ["marcio", "nicolas", "david"];

function recorrerArray(array) {
    for (let elementoArray of array) {
        console.log(elementoArray)
    }
}

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1

//Crear lista desordenada
let armarLista = function () {
    let ul = document.getElementById("lista-desordenada");
    for (fruta of frutas) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${fruta.Nombre} ${fruta.Precio} ${fruta.Peso}`))
        ul.appendChild(li);
    }
}

/* ---------------- ----------------- */

function sum(num1, num2) {
    return num1 + num2;
}

function calcular(num1, num2, callback) {
    return callback(num1, num2);
}


var episode;
var episodes;

function getEpisodes(url, callback) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function cambiarTituloMessi(respuesta) {
    episode = JSON.parse(respuesta.responseText);
    episodes = episode.results;
    let cardsNoticias = document.getElementsByClassName("card-title");
    let cardMessi = cardsNoticias[2];
    cardMessi.innerHTML = episodes[0].name;
}
/* 
function parsearInfo(respuesta){
    episode = JSON.parse(respuesta.responseText);
    episodes =  episode.results;
    return episodes;
} */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()