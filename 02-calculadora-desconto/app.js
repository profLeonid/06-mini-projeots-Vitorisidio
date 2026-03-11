'use strict'

function calcularDesconto() {

    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    removerClasses()

    if (preco.value && desconto.value) {
        let resultadoCalculo = preco.value * (desconto.value / 100)
        let precoFinal = preco.value - resultadoCalculo
        resultado.textContent = "você economizou: " + resultadoCalculo + " Reais," + " Preço Final: " + precoFinal + " Reais"


    } else {
        resultado.textContent = 'PREENCHA O CAMPO VAZIO'

    }


    if (desconto.value <= 5) {
        resultado.classList.add('descontoUm')
    } else if (desconto.value == 6 || desconto.value <= 10) {
        resultado.classList.add('descontoDois')
    } else {
        resultado.classList.add('descontoTres')
    }
}


function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('descontoUm', 'descontoDois', "descontoTres")
    
}
