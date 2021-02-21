//-----------FIND

const arr8 = [1, 2, 3, 4]

const firstGreaterThanTwo = arr8.find(value => value > 2) //Parecido com FILTER

console.log(firstGreaterThanTwo);

//-------------FINDINDEX a mesma coisa que find porem retorna apenas o indice do elemento

const arr9 = [1, 2, 3, 4]

const firstIndexGreaterThanTwo = arr9.findIndex(value => value > 2)

console.log(firstIndexGreaterThanTwo); // retornou o indice 2 sendo o elemento 3 que é maior que 2.


//-------------FILTER

const arr10 = [1, 2, 3, 4]

const allValuesGreaterThanTwo = arr10.filter(value => value > 2)

console.log(allValuesGreaterThanTwo);

//-------------INDEXOF

const arr11 = [1, 3, 3, 4, 3]

const firstIndexOfItem = arr11.indexOf(3)

console.log(firstIndexOfItem);

//------------LASTINDEXOF

const arr12 = [1, 3, 3, 4, 3]

const lastIndexOfItem = arr12.lastIndexOf(3)

console.log(lastIndexOfItem);

//------------INCLUDES

const arr13 = [1, 3, 3, 4, 3]

const hasItemOne = arr13.includes(1)
const hasItemTwo = arr13.includes(2)

console.log(hasItemOne);
console.log(hasItemTwo);

//----------------SOME

const arr14 = [1, 3, 3, 4, 3]

const hasSomeEvenNumber = arr14.some(value => value % 2 === 0) 
//verifica se apenas um elemento do array satifaz a condição
console.log(hasSomeEvenNumber);

const students = [
    {name: 'John', grade: 7 },
    {name: 'Jenny', grade: 5 },
    {name: 'Peter', grade: 4 }
]

console.log(students.some(student => student.grade >= 7));

//-------------------EVERY

const arr15 = [1, 3, 3, 4, 3]

const allEvenNumbers = arr15.every(value => value % 2 === 0) 
//verifica se todos os elementos do array satifaz a condição
console.log(allEvenNumbers);

console.log(students.every(student => student.grade >= 7));


