const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value.trim();
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Verifica se a altura contém uma vírgula
    if (altura.includes(',')) {
        // Substitui vírgula por ponto para permitir conversão em número decimal
        altura = altura.replace(',', '.');
    } else {
        // Se não contiver vírgula, considera a altura em centímetros e converte para metros
        altura /= 100; // Convertendo centímetros para metros
    }

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        let descricao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso';
            descricao = 'Você está abaixo do peso ideal. Recomendamos consultar um médico ou nutricionista.';
        } else if (valorIMC < 24.9) {
            classificacao = 'Peso normal';
            descricao = 'Você está dentro da faixa de peso considerada saudável pela OMS.';
        } else if (valorIMC < 29.9) {
            classificacao = 'Sobrepeso';
            descricao = 'Você está com sobrepeso. É importante adotar hábitos saudáveis e fazer exercícios regularmente.';
        } else if (valorIMC < 34.9) {
            classificacao = 'Obesidade grau I';
            descricao = 'Você está com obesidade grau I. Recomendamos procurar orientação médica para avaliação e acompanhamento.';
        } else if (valorIMC < 39.9) {
            classificacao = 'Obesidade grau II';
            descricao = 'Você está com obesidade grau II. É fundamental buscar orientação médica para tratamento e acompanhamento.';
        } else {
            classificacao = 'Obesidade grau III (mórbida)';
            descricao = 'Você está com obesidade grau III. É urgente procurar ajuda médica para tratamento.';
        }

        resultado.innerHTML = `<strong>${nome}, seu IMC é ${valorIMC}</strong>. Você está classificado como <strong>${classificacao}</strong>. ${descricao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);
