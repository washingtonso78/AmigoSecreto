
let amigos = [];

// Função exibir texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsivevoice.speak(texto, 'Brasilian Portuguese Female', {rate:1.2});
}

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    // Verifica se o campo não está vazio e se o nome já não está na lista
    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        
        // Atualiza a lista exibida
        atualizarListaAmigos();

        // Limpa o campo de input
        input.value = '';
    } else {
        exibirTextoNaTela('h2','Por favor, digite um nome válido ou um nome que ainda não foi adicionado.');
    }
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atualizada

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const resultados = [];
    const amigosSorteados = [...amigos]; // Copia o array de amigos para não modificar o original

    // Sorteio
    while (amigosSorteados.length) {
        const amigoSorteado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        const sorteado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];

        // Evita que a pessoa sorteie a si mesma
        if (sorteado !== amigoSorteado) {
            resultados.push(`${amigoSorteado} sorteou ${sorteado}`);
        }
    }

    // Exibe os resultados
    atualizarResultados(resultados);
}

// Função para atualizar a lista de resultados
function atualizarResultados(resultados) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ''; // Limpa a lista atualizada

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoList.appendChild(li);
    });
}