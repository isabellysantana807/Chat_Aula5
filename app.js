'use strict'

const pessoas = [

    {
        nome: 'Vania',
        imagem: 'mãe.jpg',
        mensagem: 'Estou no caminho...',
        contato: 'Mãe',
        tempo: 'Há 2 hora',
        quantidade: '3'
    },

    {
        nome: 'Vitor Holanda',
        imagem: 'jihy.jpg',
        mensagem: 'vida? manda sua localizção',
        contato: 'Vitor Amor',
        tempo: 'Há 4 horas',
        quantidade: '10'
    },

    {
        nome: 'amanda',
        imagem: 'alissa.jpg',
        mensagem: 'Estou na padaria',
        contato: 'Amanda Trabalho',
        tempo: 'Há 10 minutos',
        quantidade: '1'
    },

    {
        nome: 'João',
        imagem: 'joao.jpg',
        mensagem: 'parabéns pelo desepenho',
        contato: 'João chefe',
        tempo: 'Há 5 minutos',
        quantidade: '1'
    },

    {
        nome: 'Maria Clarisse',
        imagem: 'clarisse.jpg',
        mensagem: 'Amg? preciamos conversar',
        contato: 'Clarinha',
        tempo: 'Há 1 minuto',
        quantidade: '3'
    },

    {
        nome: 'Ana Julia',
        imagem: 'ana.jpg',
        mensagem: 'Te amo amg',
        contato: 'ana',
        tempo: 'Há 30 minutos',
        quantidade: '2'
    },

    {
        nome: 'Vitor Hugo',
        imagem: 'hugo.jpg',
        mensagem: 'KKKKKKKKKKKK',
        contato: 'Vitor trabalho',
        tempo: 'Há 1 dia',
        quantidade: '2'
    },

    {
        nome: 'Maria Eduarda',
        imagem: 'maria.jpg',
        mensagem: 'Leva meu bolo!',
        contato: 'Duda',
        tempo: 'Há 05 segundos',
        quantidade: '1'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)