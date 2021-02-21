//(DECORATOR) usado comumente em Typescript

//em js sem a sintaxe de decorator
let loggedIn = false

function callIfAuthenticated(fn) {
    return !!loggedIn && fn()
}

function sum(a, b) {
    return a + b
}

console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = true
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false
console.log(callIfAuthenticated(() => sum(2, 3)));