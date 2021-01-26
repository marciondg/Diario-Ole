/* Noticias */

var apiKey = "ec96551c0b2b4ccd8e791bd60d9a9bb2";
var urlDeportes = "https://api.jornalia.net/api/v1/articles?apiKey=ec96551c0b2b4ccd8e791bd60d9a9bb2&providers=Clarin%2CLaNacion&categories=DEPORTES";
var urlCoronaVirus = "https://api.jornalia.net/api/v1/articles?apiKey=ec96551c0b2b4ccd8e791bd60d9a9bb2&search=coronavirus&providers=Clarin"

function obtenerNoticias(url, callback) {
    var response;
    response = new XMLHttpRequest();
    response.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this)
        }
    };
    response.open("GET", url, true);
    response.send();
}

var noticiasJSON;
var noticias;

function renderizarNoticias(respuesta) {
    noticiaJSON = JSON.parse(respuesta.responseText);
    noticias = noticiaJSON.articles;
    crearNoticiaHTML(noticias);
}

const grupoNoticias = document.getElementById('grupoNoticias');



function crearNoticiaHTML(coleccionNoticias) {
    for (let unaNoticia of coleccionNoticias) {
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
        nuevoA.target = "_blank";
        nuevaCard.appendChild(nuevoA);
        /* Agrego imagen de la noticia */
        let imagen = document.createElement('img');
        if (unaNoticia.imageUrl == null)
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

botonDeportes.onclick = function () {
    if (seccionActual != 'deportes') {
        eliminarNoticiasExistentes();
        obtenerNoticias(urlDeportes, renderizarNoticias);
    }
    seccionActual = 'deportes';
};

botonCoronaVirus.onclick = function () {
    if (seccionActual != 'coronavirus') {
        eliminarNoticiasExistentes();
        obtenerNoticias(urlCoronaVirus, renderizarNoticias);
    }
    seccionActual = 'coronavirus';
};

/* Cómo eliminar las noticias existentes */
function eliminarNoticiasExistentes() {
    grupoNoticias.innerHTML = "";
} 

/* wrapperNoticias.innerHTML = "" */