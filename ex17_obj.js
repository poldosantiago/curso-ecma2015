


var pessoa = {nome: 'Ana Jones', idade: 20, sexo: 'masculino'};
var {nome, idade, sexo = 'indefinido'} = pessoa;

console.log(nome, idade, sexo)

var {nome: n, idade: i, sexo:s} = pessoa;

console.log(n, i, s)
