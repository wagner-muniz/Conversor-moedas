const convertButon = document.querySelector(".btn-converter")
const coinselect = document.querySelector(".coin-select")

function convertValues(){
    const inputValorValue = document.querySelector ("#valor") .value
    const valueConvertInput = document.querySelector("#valor") 
    const valueConverted = document.querySelector("#valor-convertido")

    const dolartoDay = 5.57
    const eurotoDay = 6.56
    const bitcoinDay = 479.99

    if(coinselect.value == "dolar"){
        valueConverted.value = Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputValorValue / dolartoDay)
};

    if(coinselect.value == "euro"){
        valueConverted.value = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputValorValue/eurotoDay)
};

if (coinselect.value === "bitcoin") {
    valueConverted.value =
        new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputValorValue / bitcoinDay) + " BTC"
}


}

const imgCoin = document.querySelector(".flag")

function changeCoin() {
    if (coinselect.value === "dolar") {
        imgCoin.src = "./assets/img/dolar.png"
    } else if (coinselect.value === "euro") {
        imgCoin.src = "./assets/img/euro.png"
    } else if (coinselect.value === "bitcoin") {
        imgCoin.src = "./assets/img/bitcoin.png"
    }
}

coinselect.addEventListener("change", changeCoin)
convertButon.addEventListener("click", convertValues)


