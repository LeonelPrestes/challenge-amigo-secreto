let amigos = [];

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

function mostrarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    amigos.forEach(element => { 
        lista.innerHTML += `<li>${element}</li>`
    });
}

function sortearAmigo(){
    let sorteado = document.getElementById('resultado')
    if (amigos == '') {
        sorteado.innerHTML = ''
        alert('Primeiro adicione amigos para o sorteio')
        return
    } else {
        let indexSorteado = Math.floor(Math.random()* amigos.length)
        amigoSorteado = amigos[indexSorteado]
        sorteado.innerHTML = `<h2>${amigoSorteado}</h2>`
        amigos.splice(indexSorteado, 1)
        mostrarLista()
    }
}