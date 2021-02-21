const users = ['Guilherme', 'Pedro', 'Jennifer']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name:'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    },
]

//Retornar a quantidade de itens de um array
console.log('Items;', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach( (person, index, arr) => { //processo de iteração, isto é repetir mais de uma ação
    console.log(`Nome: ${person.name} index: ${index}`, arr);
})

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const people = person => {
    person.course = 'Introdução ao Javascript'
    return person
}

const personsWithCourse = persons.map(people) //aqui está fatorado com a função people declarada fora do escopo do map

console.log('\nPessoas com a adição do course:', personsWithCourse);

//Transformar uma array em outro tipo
const totalAge = persons.reduce((age, person) => { //reduce basicamente reduz o array somando todos os seus valores retornando tanto um array ou outro tipo
    age += person.age
    return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge); //retornou um number


// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                          age += person.age
                          return age
                        }, 0)

console.log('\nSoma de idade das pessoas que possuem idade par', totalEvenAges);