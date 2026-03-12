'use strict'

function calcularIMC() {

    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    if (nome.value && altura.value && peso.value) {

        let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))
        return imc

    } else {
        resultado.textContent = 'preencha todos os campos'
    }

}

function exibirIMC() {
    const resultado = document.getElementById('resultado')
    const nome = document.getElementById('nome')
    const resultadoImc = calcularIMC()

    removerClasses()
    if (resultadoImc < 18.5) {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Abaixo do peso"
        resultado.classList.add('abaixo')
    } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Peso normal"
        resultado.classList.add('normal')
    } else if (resultadoImc >= 25.0 && resultadoImc < 30) {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Sobrepeso"
        resultado.classList.add('sobrepeso')
    } else if (resultadoImc >= 30.0 && resultadoImc < 35) {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Obesidade grau I"
        resultado.classList.add('obesidadeI')
    } else if (resultadoImc >= 35.0 && resultadoImc < 40) {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Obesidade grau II"
        resultado.classList.add('obesidadeII')
    } else {
        resultado.textContent = nome.value + ", seu IMC é: " + resultadoImc.toFixed(2) + " Classificação: Obesidade grau III"
        resultado.classList.add('obesidadeIII')
    }

}

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidadeI', 'obesidadeII', 'obesidadeIII' )

}