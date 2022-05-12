const myName = "Ricielli"
const birthCity = "Mogi das Cruzes"
let birthYear = "2030"

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log (typeof patientId)
console.log (typeof isEnrolled)
console.log (typeof patientInfo)
console.log (typeof patientEmail)
console.log(typeof patientAge)

const base = 5;
let height = 8;
const area = base*height;
const perimeter = base+base+height+height;
console.log (area);
console.log (perimeter);

const score = 59
if (score >= 80){
    console.log ("Parabéns, você foi aprovada(o)!");
}
else if (score < 80 && score >= 60){
    console.log ("Você está na nossa lista de espera");
}
else {
    console.log ("Você foi reprovada(o)");
}
const currentHour = 10
let message =""
if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!"
}
else{
    message = "Hmmm, cheiro de café recém passado"
}
console.log (message)

let weekDay = "Sabado"

if (weekDay === "segunda-feira"||weekDay ==="terça-feira"||weekDay ==="quarta-feira"||weekDay ==="quinta-feira"||weekDay ==="sexta-feira"){
    console.log ('Oba, mais um dia de aprendizado na Trybe >:D');
}
else{
    console.log ("FINALMENTE, descanso merecido UwU")
}
let status = 'carro'
switch (status) {
    case 'aprovada':
        console.log('aprovada');
        break;
    case 'lista':
        console.log('lista');
        break;
    case 'reprovada':
        console.log('reprovada');
        break;

    default:
        console.log('não se aplica');
        break;
}