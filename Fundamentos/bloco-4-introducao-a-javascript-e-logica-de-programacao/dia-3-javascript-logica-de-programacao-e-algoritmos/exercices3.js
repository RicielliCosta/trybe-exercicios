let size = 10
let resultado = size
for (let index = 1; index < size; index+=1) {
    resultado *= index
}
console.log(resultado);

// Exercício 2
let word = 'tryber';
let saida = ""
for (let character of word) {
    saida = character + saida
}
console.log(saida);

// Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior =''
let menor = array [0]
for (let word of array) {
    if (word.length > maior.length){
        maior = word
    }
    if (word.length < menor.length){
        menor = word
    }
}
console.log(maior);
console.log(menor);

// Exercício 4
let limite = 50
let arrayPrimo =[]
for (let numero = 2;numero <= limite; numero += 1){
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor +=1){
        if (numero % divisor === 0){
            primo = false;
            break
        }
    }
    if (primo){
        arrayPrimo.push(numero)
    }  
}
let maiorPrimo = Math.max.apply(null,arrayPrimo);
console.log(maiorPrimo);
