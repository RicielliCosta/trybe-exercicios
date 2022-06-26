const func = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_')
    const obj = {
        nomeCompleto: nome,
        email: `${email}@trybe.com`
    }
    return obj
} 

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
  //----------------------------------------------------------//
  const func2 = (number1, number2) => number1 === number2

  const result = (number, callback) => {
    const numberAleatory = Math.floor(( Math.random() * 5 ) + 1)
    if (callback (number, numberAleatory)){
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente'
    }
  }
  console.log(result(3 ,func2));
  //-------------------------------------------------------------//
  const check = (answer1, answer2) => {
  if (answer1 === answer2){
    return 1
  }
  if (answer2 === 'N.A'){
      return 0
  }
  return -0.5
  }
  
  const hof = (arrGab, arrRes, callback) => {
    let point = 0
    for (let index = 0; index < arrGab.length; index += 1) {
        const result = callback(arrGab[index], arrRes[index]);
        point += result;
    }
    return `Resultado final: ${point} pontos`;
  }

    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

  console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
