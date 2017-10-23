var pessoas = [
  {nome: 'Ash', idade: 13, pais: 'EUA'},
  {nome: 'Josh', idade: 15, pais: 'EUA'},
  {nome: 'Sandra', idade: 23, pais: 'Brasil'},
  {nome: 'Pedro', idade: 10, pais: 'Brasil'},
  {nome: 'Marcelo', idade: 28, pais: 'Brasil'}
]

//1 solucao
/*
var idade = 20;
function tiraIdades(objeto){
  return objeto.idade > idade;
}
idades = pessoas.filter(tiraIdades);
console.log(idades)
*/

//2 solucao
/*
function tiraPorIdade(obj,age){
  return obj.filter((obj) => obj.idade > age)
}
console.log(tiraPorIdade(pessoas, 20));
*/

//3 solucao - outra coisa

var maiores20 = pessoas
  .filter(pessoa => pessoa.idade > 20 )
  .map(pessoa => pessoa.nome)

console.log(maiores20);
