// Variável para guardar a lista de amigos
let amigos = [];

// função chamada ao clicar no botão "Adicionar", feita para adicionar os nomes na lista. Com validação para o campo não ficar vazio e não adicionar nomes repetidos.
function adicionarAmigo(){
    let input = document.getElementById('amigo');
    if (input.value == ""){
        alert('Por favor, insira o nome de um amigo(a) para adicionar à lista.');
        input.focus()
        return
    } if (amigos.includes(input.value)) {
        alert(`Amigo(a) ${input.value} já está na lista.`);
        input.value = '';
        input.focus();
        return
    } else {
        amigos.push(input.value);
        input.value = '';
        mostrarLista()
        input.focus()
    }
    
}

//função para mostrar os todos os nomes que ainda não foram sorteados.
function mostrarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    amigos.forEach(element => { 
        lista.innerHTML += `<li>${element}</li>`
    });
}

// função para sortear um amigo. Chamado quando o botão "Sortear amigo" é clicado.
function sortearAmigo(){
    let sorteado = document.getElementById('resultado')
    if (amigos == '') {
        sorteado.innerHTML = ''
        alert('Primeiro adicione amigos para o sorteio')
        return
    } else {
        let indexSorteado = Math.floor(Math.random()* amigos.length)
        amigoSorteado = amigos[indexSorteado]
        sorteado.innerHTML = `Seu amigo secreto é o(a) <h2>${amigoSorteado} !!!</h2>`
        amigos.splice(indexSorteado, 1)
        mostrarLista()
    }
}