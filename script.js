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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/**Asumiremos que nunca tomaran el valor de null y solo le declaramos como "HTMLElement" */
var btn_I = document.getElementById("btn-Ironman");
var btn_C = document.getElementById("btn-Cap");
var btn_H = document.getElementById("btn-Hulk");
var btn_T = document.getElementById("btn-Thor");
var btn_inicio = document.getElementById("btn-Inicio");
var main = document.getElementById("main");
var cont_inicial = document.getElementById("contenido-inicial");
var loading = document.getElementById("loading");
var barras = document.getElementById("imgBarras");
/*DATOS PRIVADOS:
Please dont hack me ;) */
var hash = "2f5bee855d54cd50792a5ee5765c93c5";
var apikey = "7f70f0f358a89d98a0c5313121534eb8";
var url_IronMan = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + apikey + "&hash=" + hash + "&limit=20&nameStartsWith=iron%20man";
var url_Hulk = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + apikey + "&hash=" + hash + "&limit=20&nameStartsWith=hulk";
var url_CapitanAmerica = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + apikey + "&hash=" + hash + "&limit=20&nameStartsWith=captain%20america";
var url_Thor = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + apikey + "&hash=" + hash + "&limit=20&nameStartsWith=thor";
var urls = {
    url_IronMan: url_IronMan,
    url_CapitanAmerica: url_CapitanAmerica,
    url_Hulk: url_Hulk,
    url_Thor: url_Thor
};
//Solo borrar el hijo de main "todosComics si ya se ha dibujado, es decir, borrar = true"
var borrar = false;
var draw = function (json) {
    var div = document.createElement("div");
    div.id = "todosComics";
    div.innerHTML = "<p>Comics: </p>";
    json.forEach(function (comic) {
        var cont_html = "\n                <div id=\"comic\">\n                    <h2>" + comic.name + "</h2>\n                    <p>" + comic.description + "</p>\n                    <img src = \"" + comic.thumbnail.path + "/standard_fantastic." + comic.thumbnail.extension + "\" alt=\"" + comic.nombre + "\">\n                </div>\n            ";
        div.insertAdjacentHTML("beforeend", cont_html);
    });
    main.appendChild(div);
    borrar = true;
};
var showHero = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, _a, response2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                cont_inicial.style.display = "none";
                loading.style.display = "block";
                if (borrar) {
                    main.removeChild(todosComics);
                }
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _b.sent();
                loading.style.display = "none";
                console.log(response);
                _a = response.status;
                switch (_a) {
                    case 200: return [3 /*break*/, 2];
                    case 404: return [3 /*break*/, 4];
                }
                return [3 /*break*/, 5];
            case 2: return [4 /*yield*/, response.json()];
            case 3:
                response2 = _b.sent();
                console.log(response2.data.results);
                draw(response2.data.results);
                buttons.style.height = "100%";
                return [3 /*break*/, 6];
            case 4:
                console.log("Not Found");
                return [3 /*break*/, 6];
            case 5:
                console.log("Error " + response.status);
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
btn_I.addEventListener("click", function () { return showHero(urls.url_IronMan); });
btn_C.addEventListener("click", function () { return showHero(urls.url_CapitanAmerica); });
btn_H.addEventListener("click", function () { return showHero(urls.url_Hulk); });
btn_T.addEventListener("click", function () { return showHero(urls.url_Thor); });
btn_inicio.addEventListener("click", function () {
    cont_inicial.style.display = "block";
    todosComics.style.display = "none";
});
//Menú desplegable
var buttons = document.getElementById("buttons");
barras.addEventListener("mouseover", function () {
    buttons.style.left = "0";
    buttons.style.transition = ".5s";
});
buttons.addEventListener("mouseout", function () {
    buttons.style.left = "-262px";
});
