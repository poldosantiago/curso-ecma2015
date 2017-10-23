
function media(...notas){
  var total = notas.reduce((valorTotal, proximo) => valorTotal + proximo);

  return total / notas.length;
}


console.log(media(5,5))
console.log(media(8,9,3,7))
