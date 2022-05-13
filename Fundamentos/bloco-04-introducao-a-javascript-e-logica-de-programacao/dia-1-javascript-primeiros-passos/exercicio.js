const a = 3
const b = 7
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if (a>b) {
    console.log('Maior número é o ', a);
}else{
    console.log('Maior número é o ', b);  
}

const c = 10
if (a>b && a>c) {
    console.log('Maior número é o ', a);
}else if (b>a && b>c) {
    console.log('Maior número é o ', b);  
}else{
    console.log('Maior número é o ', c);
}

const d = 0
if (d>0) {
    console.log('positive');
}else if (d<0){
    console.log('negative');
}else{
    console.log('zero');
}

const angle1 = 90
const angle2 = 45
const angle3 = -45
if (angle1 + angle2 + angle3 === 180) {
    console.log(true);
}else if (angle1<0||angle2<0||angle3<0){
    console.log('error');
}else{
    console.log(false);
}

const piece = 'PAWN'.toLowerCase()
if (piece === 'pawn') {
    console.log('front');
} else if (piece === 'bishop') {
    console.log('diagonals');
}else if (piece === 'tower') {
    console.log('straight line horizontally and vertically');
}else if (piece === 'horse') {
    console.log('two squares horizontally or vertically and then one more square at a right angle');
}else if (piece === 'queen') {
    console.log('any number of houses in a straight line vertically, horizontally or diagonals');
}else if (piece === 'king') {
    console.log('a straight house vertically, horizontally or diagonals');
}else{
    console.log('error');
}

const grade = 1
const percentage = (grade*10)
if (percentage > 100 || percentage < 0){
    console.log('error');
} else if (percentage >= 90) {
    console.log("A");
} else if (percentage >= 80) {
    console.log('B');
} else if (percentage >= 70) {
    console.log('C');
} else if (percentage >= 60) {
    console.log('D');
} else if (percentage >= 50) {
    console.log('E');
} else if (percentage < 50) {
    console.log('F');
}

const e = 1
const f = 5
const g = 41
if (e % 2 === 0 || f % 2 === 0 || g % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

const h = 2
const i = 20
const j = 42
if (h % 2 !== 0 || i % 2 !== 0 || j % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

const custo = -2
const venda = 10
if (custo < 0 || venda < 0) {
    console.log('error');
} 
const custoTotal = (custo+custo*0.2)
const lucro = (venda-custoTotal)
console.log('O lucro total será de ', lucro*1000);