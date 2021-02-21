//APLICANDO CONCEITOS REST, SPREAD, OPERATOR E DESTRUCTURING

function sum(a, b) {
    console.log(arguments); 
//arguments é palavra reservada que informa todos o conteudo 
//gerado pelo retorna da função sendo executada
    return a + b
}

console.log(sum(5, 5, 5, 2, 3, ));


//O NORMAL É: 

function sum1(a, b) {
    var value = 0 

    for (var i= 0; i < arguments.length; i++) { 
        // um looping mas somando os valores fora do contexto da função 
        value += arguments[i]
    }

    return value
}

console.log(sum1(5, 5, 5, 2, 3));

// COM ES6 usa-se o "REST OPERATOR ...(...REST) "


function sum2(...args) { // traz consigo metodos de array
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum2(5, 5, 5, 2, 3));

//------ARGUMENTS NÃO FUNCIONAM  COM ARROW FUNCTIONS, apenas com REST OPERATOR

const sum3 = (a, b,...rest) => { // o restante do argumento ele tranforma em array
     console.log(a, b, rest);
}

console.log(sum3(5, 5, 5, 2, 3));


//---------------------Forma de repassar valores de uma função(qualquer valor) para outra -------------------

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum4 = (...rest) => {
     return multiply.apply(undefined, rest) 
// repassando uma lista de valores para outra função com rest e usa apply para executar
}

console.log(sum4(5, 5, 5, 2, 3));


//Forma de repassar valor com o ES6 SPREAD OPERATOR (REST...)...

const multiply1 = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum5 = (...rest) => {
     return multiply1(...rest)
}

console.log(sum5(5, 5, 5, 2, 3));


// spread operator funciona com strings, arrays, objects e objects iteravaies


const str = 'Digital Innovation One'
const arr = [1, 2, 3, 4]

function logArgs(...args) { // spread quebra cada elemento e retorna um array com todos os elementos
    console.log(args);
}

logArgs(...str)
logArgs(...arr)

const arr2 = [...arr, 5, 6, 7]
console.log(arr2);

const arr3 = [...arr2, ...arr, 0 , 0, 0]
console.log(arr3);

const arrClone = [...arr]
console.log(arrClone);


const obj = { // só spread em objetos para objetos!!!!!
    test: 123
}
const obj2 = {
    ...obj,
    teste2: 'Hello'
}
console.log(obj2);

// spreads em objetos quando reescrever seus valores a ordem é muito 
//importante porque pode alterar sem que deseja.

const obj3 = {
    test: 123
}

const obj4 = obj3
obj4.test = 45

console.log(obj3); //RESCREEEVEU OBJS SENDO QUE É APENAS SUA REFERENCIA, 
//até mesmo pelos seus niveis usadno destructuring


const objOne = {
    test: 123
}

const objClone = { ...objOne}

objClone.test = 456
console.log(objOne); //NESTE CASO NÃO REESCREVEU O PRIMEIRO, CRIOU CLONE