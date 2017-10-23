var notas = [8,5,3];

var resultado = notas.reduce((valorTotal, proximoValor) => {
  return valorTotal + proximoValor;
})

console.log(resultado)

var meses = ['JAN','FEV','MAR','ABR',]

var resultado2 = meses.reduce((valorTotal, proximoValor) => {
  return valorTotal + '/' +proximoValor;
})
console.log(resultado2)
