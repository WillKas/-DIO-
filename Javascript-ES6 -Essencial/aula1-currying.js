function soma(a) {
    return function(b) {
        return a + b
    }
}

const soma2 = soma(2)
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

/* UMA BOA FORMA DE DIMINUIR OS PARAMETROS, OS TORNANDO EM FUNÇÕES DENTRO DA FUNÇÃO PRINCIPAL
 E UTILIZANDO SEUS VALORES EM VARIAVEIS*/