function calcularMedia() {

    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')
    const nota3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')

    if(nota1.value && nota2.value && nota3.value ){

        let resultadoCalculo = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) )/3

    }else{
        resultado.textContent = 'preencha todos os campos'
    }


}

function media() {
    const resultado = document.getElementById('resultado')
    const mediaFinal = calcularMedia()

    if(mediaFinal => 7){
        resultado.textContent = 'Aprovado'
    }

}