//----------KEYS

const arr5 = [1, 2, 3, 4]

const arrKeysIterator = arr5.keys() //pega todas as chaves(indices) do array e cria um iterator

const arrayOne = arrKeysIterator.next() // retorna um objeto transformado com o valor(value) do indice com um done(feito) estando false
console.log(arrayOne); 
const arrayTwo = arrKeysIterator.next()
console.log(arrayTwo);
const arrayTree = arrKeysIterator.next()
console.log(arrayTree);
const arrayFour = arrKeysIterator.next()
console.log(arrayFour);


//-----------VALUES

const arr6 = [1, 2, 3, 4]

const arrValueIterator = arr6.values()

const Iterator1 = arrValueIterator.next() // Em vez de pegar o indice, pega os valores do array
const Iterator2 = arrValueIterator.next()
const Iterator3 = arrValueIterator.next()
const Iterator4 = arrValueIterator.next()

console.log('\n',Iterator1);
console.log(Iterator2)
console.log(Iterator3);
console.log(Iterator4);


//------------ENTRIES

const arr7 = [1, 2, 3, 4]

const arrEntriesIterator = arr.entries() 
// retorna o valor tanto das chaves(indice) como do valor(elementos) do array

const Entries1 = arrEntriesIterator.next()
const Entries2 = arrEntriesIterator.next()
const Entries3 = arrEntriesIterator.next()
const Entries4 = arrEntriesIterator.next()

console.log('\n', Entries1);
console.log(Entries2);
console.log(Entries3);
console.log(Entries4);


console.log(frutas);
const frutasIterator = frutas.entries()
console.log(frutasIterator.next(), frutasIterator.next(), frutasIterator.next(), frutasIterator.next());