let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index+= 1) {
    console.log(numbers[index]);
}

// Exercicio 2
let sum = 0
for (let index = 0; index < numbers.length; index+= 1) {
    sum += numbers[index]
}
    console.log(sum);

// Exercício 3
let media = sum/numbers.length
console.log(media);

// Exercício 4
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

// Exercício 5
let maiorValor = Math.max.apply(null, numbers)
console.log(maiorValor);

// Exercício 6
let impar = 0
for (let index = 0; index < numbers.length; index+= 1) {
    if (numbers[index]%2 ==! 0) {
    impar += 1    
    }      
}
if (impar===0){
    console.log('Nenhum valor ímpar encontrado');    
    }else{
        console.log(impar);
    }

// exercício 7
let menorValor = numbers[0]
for (let index = 0; index < numbers.length; index+= 1) {
    let numero = numbers[index]
    if (numero < menorValor){
        menorValor = numero
    }
}
console.log(menorValor);

// exercício 8
let arrayNova = []
let size = 26
for (let index = 1; index < size; index+= 1) {
    arrayNova.push (index)   
}
console.log (arrayNova);

// exercício 9
let resultados = []
for (let index = 1; index < size; index += 1){
    resultados.push (index / 2)
}
console.log(resultados);