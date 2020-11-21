"use strict";
//Buttons
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**Asumiremos que nunca tomaran el valor de null y solo le declaramos como "HTMLElement" */
const btn_I = document.getElementById("btn-Ironman");
const btn_C = document.getElementById("btn-Cap");
const btn_H = document.getElementById("btn-Hulk");
const btn_T = document.getElementById("btn-Thor");
const btn_inicio = document.getElementById("btn-Inicio");
const main = document.getElementById("main");
const cont_inicial = document.getElementById("contenido-inicial");
const loading = document.getElementById("loading");
const barras = document.getElementById("imgBarras");
/*DATOS PRIVADOS:
Please dont hack me ;) */
const hash = "2f5bee855d54cd50792a5ee5765c93c5";
const apikey = "7f70f0f358a89d98a0c5313121534eb8";
const url_IronMan = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=iron%20man`;
const url_Hulk = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=hulk`;
const url_CapitanAmerica = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=captain%20america`;
const url_Thor = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=thor`;
const urls = {
    url_IronMan,
    url_CapitanAmerica,
    url_Hulk,
    url_Thor
};
//Solo borrar el hijo de main "todosComics si ya se ha dibujado, es decir, borrar = true"
let borrar = false;
const draw = (json) => {
    const div = document.createElement("div");
    div.id = "todosComics";
    div.innerHTML = "<p>Comics: </p>";
    json.forEach((comic) => {
        const cont_html = `
                <div id="comic">
                    <h2>${comic.name}</h2>
                    <p>${comic.description}</p>
                    <img src = "${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}" alt="${comic.nombre}">
                </div>
            `;
        div.insertAdjacentHTML("beforeend", cont_html);
    });
    main.appendChild(div);
    borrar = true;
};
const showHero = (url) => __awaiter(void 0, void 0, void 0, function* () {
    cont_inicial.style.display = "none";
    loading.style.display = "block";
    if (borrar) {
        main.removeChild(todosComics);
    }
    const response = yield fetch(url);
    loading.style.display = "none";
    console.log(response);
    switch (response.status) {
        case 200:
            const response2 = yield response.json();
            console.log(response2.data.results);
            draw(response2.data.results);
            break;
        case 404:
            console.log("Not Found");
            break;
        default:
            console.log(`Error ${response.status}`);
    }
});
btn_I.addEventListener("click", () => showHero(urls.url_IronMan));
btn_C.addEventListener("click", () => showHero(urls.url_CapitanAmerica));
btn_H.addEventListener("click", () => showHero(urls.url_Hulk));
btn_T.addEventListener("click", () => showHero(urls.url_Thor));
btn_inicio.addEventListener("click", () => {
    cont_inicial.style.display = "block";
    todosComics.style.display = "none";
});
//Menú desplegable
const buttons = document.getElementById("buttons");
barras.addEventListener("mouseover", () => {
    buttons.style.left = "0";
    buttons.style.transition = ".5s";
});
buttons.addEventListener("mouseout", () => {
    buttons.style.left = "-262px";
});
