let user = {
    name: 'Willian'
}

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1'
user['name'] = 'Outro nome 2'

const prop = 'name'
user[prop] = 'Outro nome 3'

//Criando uma propriedade
user.lastName = 'Mateus Betim'

//Deletando um propriedade
delete user.name



const user1 = {
    name: 'Willian',
    lastName: 'Mateus Betim'
}


//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user1));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user1));

//Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user1));

//Merger propriedade de objetos
Object.assign(user1, {fullName: 'Willian Mateus Betim'})

console.log('\nAdiciona a propriedade fullName no objeto user', user1); // Não é recomendado
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user1, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar'}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariavel newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedade existentes em um objeto
const person = { name: 'Willian' }
Object.seal(person)

person.name = 'Willian Mateus'
delete person.name
person.age = 26

console.log('\nVariavel person após as alterações:' , person);