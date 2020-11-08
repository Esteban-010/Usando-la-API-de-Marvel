const btn_I = document.getElementById("btn-Ironman")
const btn_C = document.getElementById("btn-Cap")
const btn_H = document.getElementById("btn-Hulk")

/*DATOS PRIVADOS:
Please dont hack me ;) */

const hash = "2f5bee855d54cd50792a5ee5765c93c5"
const apikey = "7f70f0f358a89d98a0c5313121534eb8";
const url_IronMan =
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=iron%20man`
 const url_Hulk =
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=hulk`

const url_CapitanAmerica =
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=captain%20america`

const urls = {
    url_IronMan,
    url_CapitanAmerica,
    url_Hulk
}
    
const showHero = async (url) => {
    const response = await fetch(url)
    console.log(response)
    switch(response.status){
        case 200:
            const response2 =  await response.json()
            console.log(response2.data.results)
            break
        case 404:
            console.log("Not Found")
            break
        default:
            console.log(`Error ${response.status}`)        
    }

}

btn_I.addEventListener("click", () => showHero(urls.url_IronMan))
btn_C.addEventListener("click", () => {showHero(urls.url_CapitanAmerica)})
btn_H.addEventListener("click", () => {showHero(urls.url_Hulk)})


