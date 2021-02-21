// GENERATORSSS continua a execução Parada e retornam valores atraves de interfaces de iterators

function* hello() { // pode ser usado para criar iteradores de uma maneira mais simples
    console.log('Hello');
    yield 1

    console.log('From');
    const value = yield 2

    console.log(value);
}

const it = hello()

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));


//--------------------------------------------

function* naturalNumbers() { // ESSA FUNÇÃO É PODEROSA PRQUE CRIA UM LOOP
    let number = 0
    while (true) {
        yield number
        number++
    }
}

const it1 = naturalNumbers()

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

//------------------------------
console.log('-------------------------------');

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

for (let value of obj) {
    console.log(value);
}

//