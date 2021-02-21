//FOR

const array = ['one', 'two', 'three']

for (let index = 0; index < array.length; index++) {
    const element = array[index]
    console.log(`Element #${index}: ${element}.`);
}

//WHILE

var n = 0
var x = 0
while (n < 3) {
    n++
    x += n     //1, 3, 6
}

console.log(x);

//DO WHILE

let  i = 0
do {
    i += 1
    console.log(i);
} while (i < 5)


//FOR IN E OFF

let arr = [3, 5, 7]
arr.foo = "hello"

for (let i in arr) { // o i é indice
    console.log(i);   // logs "0", "1", "2", "foo"
}

for (let i of arr) { //executa apenas para aqueles que estão numerados
    console.log(i);    // logs "3", "5", "7"
}

