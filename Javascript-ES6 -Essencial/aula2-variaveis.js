/*
var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})(); */


//LET RESPEITA ESCOPO DE BLOCO

(() => {
    let test = 'Valor função'
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        let test = 'Valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();



const persons = ['Guilherme', 'Pedro', 'Jennifer']

persons.push['João']

persons.shift() //Remove o primeiro valor do array

persons[1] = 'James' //troca o valor do indice

var teste = 1
teste = 'testo'
console.log(teste);