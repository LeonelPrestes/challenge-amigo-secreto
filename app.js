let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo');
    if (input.value == ""){
        alert('Por favor, insira o nome de um amigo(a) para adicionar à lista.');
        input.focus()
        return
    }
    if (amigos.includes(input.value)) {
        alert(`Amigo(a) ${input.value} já está na lista.`);
        input.value = '';
        input.focus();
        return
    }
    else {
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
    console.log(amigos);
}