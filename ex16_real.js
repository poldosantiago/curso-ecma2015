function real(strings, ...values){
  const resultado = []

  values.forEach((value,index)=>{
    value = (typeof value == 'number') ? `R$${value.toFixed(2)}` : value;
    resultado.push(strings[index],value);
  });
  return resultado.join('');
}

preco = 29.99
parcela = 11;

console.log(real ` 1x de ${preco} ou 3x de ${parcela}`);
