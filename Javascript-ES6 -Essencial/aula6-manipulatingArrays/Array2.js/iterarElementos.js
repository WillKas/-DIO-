//------FOREACH

const arr = [1, 2, 3, 4, 5]

arr.forEach((value, index, arr) => {
  console.log(`${index}: ${value}`);
})

const frutas = ['melancia', 'acerola', 'laranja', 'amora']

frutas.forEach((frutas, index, arr) => console.log(index, frutas, arr)) 
// foreach não mexe no parametro arr(array que está sendo usado)

//--------MAP

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2.map(value => value * 2)); //passando por cada elemento e executando as execuções da função

const frutasMap = frutas.map((frutas, index) => `${index} - ${frutas}`)
console.log(frutasMap);

//---------FLAT----

const arr3 = [1, 2, [3, 4]]
const arrayFlat = arr3.flat() //FORMA UM UNICO ARRAY DO ARRAY QUE CONTEM ARRAYS DENTRO!
console.log(arrayFlat);

const idade = [20, 34, [35, 60, [70, 40]]] // 2 arrays dentro do array principal
const idadeFlat = idade.flat(2)
// O valor dentro do parametro significa quantas casas de arrays ele vai descer para formar o unico array!
console.log(idadeFlat);


//----------FLATMAP misturando map com flat

const arr4 = [1, 2, 3, 4]
const TheFlapMap = arr4.flatMap(value => [value * 2])  
console.log(TheFlapMap);            // [ ] aqui ||  pois vai executar esses codigos e criar uma primeira camada do array criado

const dobleTheFlapMap = arr4.flatMap(value => [[value * 2]]) // criou duas camadas no array novo
console.log(dobleTheFlapMap);





