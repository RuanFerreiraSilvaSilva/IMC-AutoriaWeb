function calcularIMC() {

    const nome = document.getElementById("nome")
    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")
    const visor = document.getElementById("resultado")

    if (!altura.value || !peso.value || !nome.value) {
        alert("Preencha todos os campos corretamente por favor")
    } else {
        let IMC = peso.value / (altura.value * altura.value)
        visor.textContent = `${nome.value} tem o IMC ${IMC}`
    }

}

const botao = document.getElementById("calcular")
botao.addEventListener("click", calcularIMC)