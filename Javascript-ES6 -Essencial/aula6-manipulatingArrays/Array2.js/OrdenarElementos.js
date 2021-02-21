//--------------SORT

const students = [
    {name: 'John', grade: 7 },
    {name: 'Jenny', grade: 5 },
    {name: 'Peter', grade: 4 }
]

console.log(students.sort((current, next) => current.grade - next.grade)); //Ordena o array com uma condição

const arr = [1, 3, 2, 5, 4]

arr.sort() // [1, 2, 3, 4, 5]

//----------------REVERSE

const arr1 = [1, 2, 3, 4, 5]
console.log(arr.reverse()); // [5, 4, 3, 2, 1 ]


//------------------JOIN - retorna uma STRING com uma determinada informação extra entre os elementos.

const arr2 = [1, 2, 3, 4, 5]

console.log(arr2.join('-')) // "1-2-3-4-5";

//----------------REDUCE - ele vai iterar cada posição 

const arr3 = [1, 2, 3, 4, 5]
// reduce ele soma todos os valores o tornando e retornando apenas um
console.log(arr3.reduce((total, value) => total += value, 0) );
//  0 no final significa o primeiro valor que ele irá ler e entao somar as outras

console.log(students.reduce((totalGrades, student) => totalGrades += student.grade, 0 ));

console.log(students  //unido o nome dos alunos separando por espaço ' ' e tendo como '' o 1º valor
            .reduce((studentsNames, student) => studentsNames += student.name  + ' ', ''));