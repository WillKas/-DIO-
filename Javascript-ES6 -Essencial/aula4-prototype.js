const myText = String('Hello prototype!')

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String);

//EXEMPLO

/*function Animal() {
    this.qtdePatas = 4
}

const cachorro = new Animal()

console.log(cachorro.qtdePatas); */

//EXEMPLO 2

function Animal() {
    this.qtdePatas = 4
}

const cachorro = new Animal();

console.log(cahorro instanceof Animal);

console.log(cahorro instanceof Function);


//Meio que herança (função construtora)

function Animal() {
    this.qtdePatas = this.qtdePatas
    this.movimentar = function() {}
}

function Cachorro(morder) {
    Animal.call(this, 4)

    this.morde = this.morde
    this.latir = function() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

/*--------------------------------Melhorando-----------------------------*/

function Animal() {}

Animal.prototype.qtdePatas = 0
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4
    this.morde = morde
}

Cachorro.prototype = Object.create(Animal)
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)



//Repetindo dunction Animal más com Classe -------------------------------------


class Animal {
    constructor() {
        this.qtdePatas = 0
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super()
        this.qtdePatas = 4
        this.morde = morde
    }

    latir() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false)

console.log(pug);
// Cachorro {qtdePatas: 4, morde: 4}



//ENCAPSULAMENTO-----

function Person(initialName) {
    var name = initialName

    Object.defineProperty(this, 'name', {
        get: function() {
            return name
        },
        set: function(value) {
            name = value
        }
    })
}

////com Class


class Person {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }
}

//-----------STATIC---------------------


function Person() {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk()); // "walking..."




//-----------OR STATIC IN CLASSES------

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk());  //"walking..."