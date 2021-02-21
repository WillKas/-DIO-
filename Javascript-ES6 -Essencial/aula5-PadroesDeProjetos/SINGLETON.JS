//(SINGLETON) como Jquery, instancia uma unica função construtora

function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this
    }

    return MyApp.intance
}

//outro exemplo

function Pessoa() {
    if (!Pessoa.instance) {
      Pessoa.instance = this;
    }

    return Pessoa.instance
}

const p = Pessoa.call({ name: 'Willian' })
const p2 = Pessoa.call({ name: 'Custom Name'})

console.log(p);
console.log(p2);  