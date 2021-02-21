//DEFAULT FUNCTION ARGUMENTS

//PRIMEIRO EXEMPLO PARA RESOLVER UMA LOGICA DESNECESSÁRIA

function multiply (a, b) {
    b = typeof b === 'underfined' ? 1 : b; 
    
    return a * b
}

console.log(multiply(5, 0));


//USANDO DEFAULT ARGUMENTS -- MUITO MELHOR DO QUE ESSA DE CIMA AQUI

function multiply1 (a, b = 1) { //(a, b= a) POREM A ORDEM É IMPORTANTE
  return a * b
}

console.log(multiply1(5, 0));


//------LAZY EVALUATION

function randomNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10
}

function multiply2(a, b = randomNumber()) { 
// essa função ramdom só sera invocada se não for passado o segundo argumento em sua chamada
    return a * b
}

console.log(multiply2(5));
console.log(multiply2(5, 5));