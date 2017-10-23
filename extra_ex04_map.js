var pessoas = [
  {nome: 'Ash', idade: 13, pais: 'EUA'},
  {nome: 'Josh', idade: 15, pais: 'EUA'},
  {nome: 'Sandra', idade: 23, pais: 'Brasil'},
  {nome: 'Pedro', idade: 10, pais: 'Brasil'},
  {nome: 'Marcelo', idade: 28, pais: 'Brasil'}
]

function tiraNome(objeto){
  return objeto.nome;
}

nomes = pessoas.map(tiraNome);
console.log(nomes)
