//--------PUSH

const frutas = ['melancia', 'banana']

const ArrLenght = frutas.push('laranja')
console.log(frutas);
console.log(ArrLenght);

//--------POP

const RemoveFruit = frutas.pop()
console.log(RemoveFruit);
console.log(frutas);

//--------UNSHIFT

const ArrLenght2 = frutas.unshift('laranja')
console.log(ArrLenght2);
console.log(frutas);

//--------SHIFT

const RemoveFruit2 = frutas.shift()
console.log(RemoveFruit2);
console.log(frutas);

//--------CONCAT

const salgados = ['coxinha', 'kibe', 'empada']
const alimentos = frutas.concat(salgados)
console.log(alimentos);

//--------SLICE

const arr = [1, 2, 3, 4, 5]

arr.slice(0, 2) // [1, 2] --indice e elementos
arr.slice(2)   //  [3, 4, 5]  --elementos
arr.slice(-1)   // [5]    --elemetos
arr.slice(-3)    //[3, 4, 5]

//--------SPLICE

const arr2 = [1, 2, 3, 4, 5]

arr2.splice(2) // [3, 4, 5] ---elementos
console.log(arr2);  //[1, 2]
arr2.splice(0, 0, 'first')  
// [] o primeiro 0 é a posição e o segundo é a quantidade e 'first' é o que quero add
console.log(arr2);  // ["first", 1, 2]

frutas.splice(1, 0, 'acerola')
console.log(frutas);

frutas.splice(2, 1, 'laranja', 'amora')
console.log(frutas);