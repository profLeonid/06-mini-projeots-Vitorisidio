'use strict'

function calcularMedia() {

    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')
    const nota3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')

    if (nota1.value && nota2.value && nota3.value) {

        let resultadoCalculo = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3
        return resultadoCalculo

    } else {
        resultado.textContent = 'preencha todos os campos'
    }


}

function media() {
    const resultado = document.getElementById('resultado')
    const mediaFinal = calcularMedia()

    removerClasses()
    if (mediaFinal >= 7) {
        resultado.textContent = 'Aprovado com a nota: ' + mediaFinal
        resultado.classList.add('aprovado')
    } else if (mediaFinal >= 5) {
        resultado.textContent = 'recuperação com a nota: ' + mediaFinal
        resultado.classList.add('recuperacao')
    } else {
        resultado.textContent = 'reprovado com a nota: ' + mediaFinal
        resultado.classList.add('reprovado')

    }

}

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
    
}