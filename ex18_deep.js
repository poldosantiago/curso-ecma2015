var pessoa = {
  nome: 'Ana Jones',
  endereco: {rua: 'A', numero: 100}
 };

 let {endereco: {rua: logradouro, numero, cep}} = pessoa;

console.log(logradouro,numero,cep)

//var { conta: {numero, agencia}} = pessoa;
//console.log(numero, agencia);
