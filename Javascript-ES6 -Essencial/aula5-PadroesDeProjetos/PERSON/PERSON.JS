//(PERSON) organiza o projeto sem usar escopo global, no caso exportanto.

let name = 'default'

function getName() {
    return name
}

function setName(newName) {
    name = newName
}

module.exports = {
    getName,
    setName
}