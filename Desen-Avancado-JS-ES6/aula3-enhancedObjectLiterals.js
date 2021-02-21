//------------ENHANCED OBJECT LITERALS


//Maneira classica de criar ojj

/*let obj = {
    prop: 'Digital innovation One'
}*/

//outra maneira

var prop1 = 'digital Innovaton One'

var obj = {
    prop1: prop1
};

console.log(obj);

// usando SHORT HAND

var prop2 = 'digital Innovaton One'

function method1() {
    console.log('Method called');
}

var obj1 = {
    prop2,
    method1
};

obj1.method1()

//OUTRA MENEIRA

var obj2 = {
    sum(a, b) { // uma função dentro do obj sem necessitar de usar nomeação  dentro do obj
        return a + b
    }
}

console.log(obj2.sum(1, 5));


//...

var propName = 'test'

var obj3 = {};

obj3[propName] = 'prop Value'

console.log(obj3);

//..melhor forma

var propName1 = 'test'

var obj4 = {
    [propName1 + 'concat'] : 'prop value'
};

console.log(obj4);