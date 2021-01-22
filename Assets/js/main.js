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

/* Noticias */

var apiKey = "ec96551c0b2b4ccd8e791bd60d9a9bb2";
var urlDeportes = "https://api.jornalia.net/api/v1/articles?apiKey=ec96551c0b2b4ccd8e791bd60d9a9bb2&providers=Clarin%2CLaNacion&categories=DEPORTES";
var urlCoronaVirus = "https://api.jornalia.net/api/v1/articles?apiKey=ec96551c0b2b4ccd8e791bd60d9a9bb2&search=coronavirus&providers=Clarin"
function obtenerNoticias(url, callback){
    var response;
    response = new XMLHttpRequest();
    response.onreadystatechange = function (){
        if (this.readyState==4 && this.status == 200){
            callback(this)
        }
    };
    response.open("GET",url,true);
    response.send();
}

var noticiasJSON;
var noticias;

function renderizarNoticias(respuesta){
    noticiaJSON = JSON.parse(respuesta.responseText);
    noticias = noticiaJSON.articles;
    crearNoticiaHTML(noticias);
}

const grupoNoticias = document.getElementById('grupoNoticias');



function crearNoticiaHTML(coleccionNoticias){
    for(let unaNoticia of coleccionNoticias){
    /* Creo nueva col */
    let nuevaColumna = document.createElement('div')
    nuevaColumna.classList.add('col');
    nuevaColumna.classList.add('noticia');
    grupoNoticias.appendChild(nuevaColumna);
    /* Creo card */
    let nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card');
    nuevaCard.classList.add('h-100');
    nuevaCard.classList.add('shadow-sm');
    nuevaColumna.appendChild(nuevaCard);
    /* Creo hipervinculo */
    let nuevoA = document.createElement('a');
    nuevoA.href = unaNoticia.sourceUrl;
    nuevoA.target ="_blank";
    nuevaCard.appendChild(nuevoA);
    /* Agrego imagen de la noticia */
    let imagen = document.createElement('img');
    if(unaNoticia.imageUrl == null)
        imagen.src = "https://images.ole.com.ar/collections/static/lazy_square.svg" /* Imagen default */
    else
        imagen.src = unaNoticia.imageUrl;
    imagen.classList.add('card-img-top');
    nuevoA.appendChild(imagen);
    /* Agrego card-body */
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    nuevaCard.appendChild(cardBody);
    /* Agrego titulo noticia */
    let tituloNoticia = document.createElement('h3');
    tituloNoticia.classList.add('card-title');
    tituloNoticia.innerHTML = unaNoticia.title;
    cardBody.appendChild(tituloNoticia);
    /* Agrego descripcion noticia */
    let descNoticia = document.createElement('p');
    descNoticia.classList.add('card-text');
    descNoticia.innerHTML = unaNoticia.description;
    cardBody.appendChild(descNoticia);
    }
}

/* Opciones drowdown */
let botonDeportes = document.getElementById('deportes');
let botonCoronaVirus = document.getElementById('coronavirus');

/* Eventos */
let seccionActual = 'null';

botonDeportes.onclick = function(){
    if(seccionActual!='deportes'){
        eliminarNoticiasExistentes();
        obtenerNoticias(urlDeportes,renderizarNoticias);
    }
    seccionActual = 'deportes';
};

botonCoronaVirus.onclick = function(){
    if(seccionActual!='coronavirus'){
        eliminarNoticiasExistentes();
        obtenerNoticias(urlCoronaVirus,renderizarNoticias);
    }
    seccionActual='coronavirus';
};


function eliminarNoticiasExistentes(){
    let noticiasExistentes = document.getElementsByClassName("col noticia");
    for (let noticia of noticiasExistentes){
        grupoNoticias.removeChild(noticia);
    }
}