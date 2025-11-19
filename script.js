const quantCookies = document.querySelector("#quant-cookies")
const imgCookies = document.querySelector("#img-cookie")

let valorQuantCookies = 0
quantCookies.value = valorQuantCookies;

imgCookies.addEventListener("click", atualizarJogo)

function atualizarQuantCookies(){
    valorQuantCookies = valorQuantCookies + 1

    quantCookies.value = valorQuantCookies
}

function atualizarJogo(){

    atualizarQuantCookies()

    //Regras do jogo 
    if(valorQuantCookies>=10){
        const imgCursor = document.querySelector("#img-cursor")
        imgCursor.style.borderColor= "green";
    }
}