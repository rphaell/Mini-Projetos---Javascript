
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'você está abaixo do peso.'
        } else if (valorIMC < 25 ) {
            classificacao = 'você está no peso ideal.'
        } else if (valorIMC < 30) {
            classificacao  = 'você está um pouco acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'você está obeso'
        } else if (valorIMC < 40 ) {
            classificacao = 'você está extremamento obeso.'
        } else {
            classificacao = 'você está com obesidade mórbida'
        }

        resultado.textContent = `${nome}, ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!'
    }




}


calcular.addEventListener('click', imc)