let nome = document.getElementById('nome-completo')
let email = document.getElementById('email-id')
let destino = document.getElementsByName('type')
let resumo = document.getElementById('abstract-id')
let data = document.getElementById('date-id')
let botao = document.getElementById('botao')
let respostas = document.getElementById('answers')

function resp(event) {
    event.preventDefault()
    respostas.innerHTML = nome.value + email.value + destino.value + resumo.value + data.value
}
botao.addEventListener('click', resp);