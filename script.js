const quantCookies = document.querySelector("#quant-cookies")
const imgCookies = document.querySelector("#img-cookie")

let valorQuantCookies = 0
quantCookies.value = valorQuantCookies;

imgCookies.addEventListener("click", atualizarQuantCookies)

function atualizarQuantCookies(){
    valorQuantCookies = valorQuantCookies + 1

    quantCookies.value = valorQuantCookies
}