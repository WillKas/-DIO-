//----------Array Basico

const arr = [1, 2, 3]
const arr2 = new Array(1, 2, 3)


//----------Array.of()

const persons = Array.of('John', 'Cris', 'Jenny')
console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto')
console.log(numbersAndStrings);

//----------Array como Função

const arrWith3Positions = Array(3)
console.log(arrWith3Positions);

const personsList = Array('John', 'Cris', 'Jenny')
console.log(personsList);

//----------Array.from

const divs = document.querySelectorAll('div')
const divArray = Array.from(divs)


