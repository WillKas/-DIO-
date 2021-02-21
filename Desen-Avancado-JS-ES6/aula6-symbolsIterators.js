/// SYMBOLSS, ITERATORS 

const uniqueId = Symbol('Hello') // FORMA DE INVOCAR UM SYMBOL

console.log(uniqueId);


const obj = {
    [uniqueId]: 'HELLO'
}

console.log(obj);

//não chega a ser uma propriedade privada porque comm Object.getOwnPropertySymbols(obj) é 
//possivel acessar sua chave

//Symbols possui propriedade Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag 

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]() 
//iterator é uma interface para vc consumir passo a passo uma lista/estrutura de dados

while (true) {
    let { value, done } = it.next()

    console.log(value);

    if(done) {
        break
    }

    console.log(value);
}

// OR
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());//POREM COM O ES6 A UMA MANEIRA MAIS SIMPLES DE EXECUTAR ISSO COM FOR OF

//FOR OF---------- 

const uniqueId1 = Symbol('Hello')
const arr1 = [1, 2, 3, 4]
const str = 'Digital Innovation One'

for (let value of arr1) {
    console.log(value); // o mesmo comportamento com a de cima
}

//FUNÇÃO ITERADORA EM UM OBJETO ---------------------------------------------------------

const obj1 = { // com esse obj se tornando iteravel, é possivel executar ações de iteração com arrays
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0

        return {
            next:() => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    } 
}

const it1 = obj1[Symbol.iterator]()

for (let value of obj1) {
    console.log(value);
}

const arr2 = [...obj1]

console.log(arr2);


