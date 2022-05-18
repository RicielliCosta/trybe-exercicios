function palindromo(word) {
    let reversed = word.split('').reverse().join('')
    if (word === reversed){
        return true
    }else{
        return false
    }
    
}
//console.log(palindromo('arara'))
//
let array =[]
function index(array) {
    for (i=0; i < array.length; i += 1){
        let maior = 0
        if (array [i] > maior){
            maior = array[i]
        }
    }
    console.log(maior);
}

index(2,5,3)