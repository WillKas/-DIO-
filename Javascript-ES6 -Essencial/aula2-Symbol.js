const symbol1 = Symbol()
const symbol2 = Symbol()

//Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedade
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Willian',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Mateus Betim'
}

console.log(user);

//Symbols criam propriedade que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedade do objeto user:', Object.keys(user));
console.log('Valores das propriedade do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedade do objeto
console.log('Todas propriedade do Objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP    : Symbol(  'UP'  ),
    DOWN  : Symbol(  'DOWN'  ),
    LEFT  : Symbol(  'LEFT'  ),
    RIGHT : Symbol(  'RIGHT'  ),
}