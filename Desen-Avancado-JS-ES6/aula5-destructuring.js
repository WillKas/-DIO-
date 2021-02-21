//DESTRUCTURING

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']]

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3] [0]

console.log(arr);

//É RUIM ESCREVER DO JEITO ACIMA, ENTÃO LHE APRESENTO O DESTRUCTURING ASSIGNMENT!!!!!!!!!!!!

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple',
    'Banana', 
    'Orange',
    ['tomato']
]

console.log(apple, apple2);
console.log(tomato);

//-------------------------------

var obj = {
    name: 'Celso',
    props: {
        age: 26,
    favoriteColors: ['black', 'blue']    
    }
}

var age = obj.props.age
var color1 = obj.props.favoriteColors[0]

var [apple2] = arr
var { 
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj

console.log(color2);

//--------------------------


var arrObj = [{ name: 'Apple', type: 'fruit'}]

fruit1 = arrObj[0].name
console.log(fruit1);

var[{ name: fruitName }] = arrObj
console.log(fruitName);


// functions

function sum([a, b] = [0 , 0]) { return a + b }
function sum2({a, b} = [0 , 0]) { return a + b }

console.log(sum([5, 5]));
console.log(sum2({a: 5, b: 5}));