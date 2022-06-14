/* const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }

  testingScope(true); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
/*   oddsAndEvens.sort((a, b)=> {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0
  }); */

oddsAndEvens.sort((a, b) => a - b)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉


const factorial = (number) => {
  if (number === 0) {
  return 1
  }
  return number * factorial(number - 1)
}
console.log(factorial(6));

const factorial2 = (number) => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(5));

const biggestWord = (phase) => {
  let words = phase.split(' ')
  let maxLength = 0
  let result = ''
  for (const word of words){
    if (word.length > maxLength){
      maxLength = word.length
      result = word
    }
  }
  console.log(result);
  return result
}
biggestWord('Antônio foi no banheirooooo e não sabemos o que aconteceu')

const button = document.querySelector('.button')
let result = document.querySelector('.result')
let clickCount = 0
button.addEventListener ('click', () => {
  clickCount += 1
  result.innerHTML = `Você deu ${clickCount} clicks`
})

const function1 = (nome) => {
  const frase = 'Tryber x aqui!'
  return`Tryber ${nome} aqui!`;
}


const function2 = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS']
  let result = `${func}
  Minhas três principais habilidades são:`
  skills.forEach((skill) => {
    result = `${result} 
    - ${skill}`
  });
  return result
}

console.log(function2(function1('rici')));