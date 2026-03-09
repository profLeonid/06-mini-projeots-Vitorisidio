'use strict'

function calcularDesconto() {

    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')


    if (preco.value && desconto.value) {
        let resultadoCalculo = preco.value *(desconto.value/100)
        resultado.textContent = resultadoCalculo

    } else {
                resultado.textContent = 'PREENCHA O CAMPO VAZIO'

    }
}