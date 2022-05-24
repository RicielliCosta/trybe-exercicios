document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = ('red')
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicionando um texto no primeiro filho do filho'
document.querySelector('#primeiroFilhoDoFilho')
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicionando um texto no primeiro filho do filho';
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = ('red')
let novoFilho = document.createElement('section')
let pai = document.querySelector('#pai')
pai.appendChild(novoFilho)
let ondeEstou = document.querySelector('#elementoOndeVoceEsta')
let filhoMeu = document.createElement('section')
ondeEstou.appendChild(filhoMeu)
let primeiroFilhoDoF = document.querySelector('#primeiroFilhoDoFilho')
let filhoDoPrimeiroF = document.createElement('section')
primeiroFilhoDoF.appendChild(filhoDoPrimeiroF)
