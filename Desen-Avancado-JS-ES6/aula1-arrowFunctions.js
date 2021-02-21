/* const sumOld = function (a, b) {
    return a + b
}


// ARROW FUNCTIONS

const sum = (a, b) => a + b

console.log(sum(5, 5));

let createObj = () => ({ text: 123 }) // retornando um objet literal

console.log(createObj());




function Car() { // função construtora
    this.foo = 'bar'
}

console.log(new Car()); // gerou um objeto


let Car2 = () => { // Funções construtoras não funcionam com arow functions
    this.foo = 'bar'
}

console.log(Car2());


//Arrow functions em hoisting --> invocar a função antes mesmo de sua criação

log('teste')


function log(value) {
    console.log(value);
}

log1() // o mesmo nao acontece com arrows functions, não é possivel fazer hoisting

var log1 = value => { console.log(vale);} */

var obj = {
    showContext: function showContext() {
        this.log('teste')

        setTimeout(function() { 
// funcao settimeout não irá funcionar pois função eventliestenerfuncionam em um escopo global
        console.log(this);
        }.bind(this), 
        1000) // bind ou apply fixa o this no contexto do objeto
    },
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext() // referenciando o proprio objeto

//Resolvendo esse objeto que contem this com O FUNCING ARROW FUNCTIONS


var obj1 = {
    showContext: function showContext() { 
        //this = obj
        setTimeout(() => { 
        this.log('after 1000ms'); 
//this dentro de uma arrow function respeita o escopo sendo this do escopo de bloco(LEXICO)
        }, 1000) 
    },
    log: function log(value) {
        console.log(value);
    }
}

obj1.showContext()