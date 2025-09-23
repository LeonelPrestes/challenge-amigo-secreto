# 🎯 Sorteador de Amigos

https://leonelprestes.github.io/challenge-amigo-secreto/

---

Este projeto é uma aplicação web simples e interativa desenvolvida com **HTML**, **CSS** e **JavaScript puro**, que permite adicionar nomes de amigos a uma lista e realizar sorteios aleatórios entre eles. Cada amigo sorteado é removido da lista, garantindo que não seja sorteado novamente.

---

## 📌 Propósito

Este projeto foi criado com foco em praticar manipulação de DOM, validação de dados e lógica de sorteio em JavaScript. Ele também serve como uma demonstração de boas práticas em projetos front-end estáticos.

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3 
- JavaScript (sem bibliotecas externas)

---

## 🚀 Como Executar o Projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Interaja com a aplicação:
   - Adicione nomes de amigos.
   - Visualize a lista atualizada.
   - Realize sorteios com um clique.

> Nenhuma instalação ou configuração adicional é necessária.

---

## 📂 Estrutura do Projeto

📁 challenge-amigo-secreto/
├── app.js
├── index.html
├── README.md
└── style.cssgit


📋 Funcionalidades
- ✅ Adicionar amigos à lista com validação
- ✅ Evitar duplicatas
- ✅ Exibir lista atualizada dinamicamente
- ✅ Sortear um amigo aleatoriamente
- ✅ Remover o amigo sorteado da lista

⚙️ Lógica Implementada
- Os nomes são armazenados em um array amigos.
- A função adicionarAmigo() valida o campo de entrada e atualiza a lista.
- A função mostrarLista() renderiza os nomes no DOM.
- A função sortearAmigo() seleciona um nome aleatório com Math.random() e o remove com splice().

🧠 Boas Práticas Aplicadas
- Validação de entrada com trim() e includes()
- Manipulação segura do DOM com innerHTML
- Remoção eficiente de elementos com splice()
- Feedback ao usuário com alert() e foco automático

❗ Problemas Conhecidos
- Nomes duplicados são bloqueados, mas não há diferenciação entre maiúsculas/minúsculas.
- A lista é reiniciada ao recarregar a página (sem persistência).

---

Feito com 💻 e ☕ por Leonel
