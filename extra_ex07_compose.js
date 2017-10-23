/*
//versao antiga
var compose = function (f, g){
  return function(x){
      return f(g(x));
  }
}
*/


var compose = (f, g) => (x) => f(g(x)) //versao ES6

var caixaAlta = x => x.toUpperCase()
var addExclamacao = texto => texto +'!'

var rage = compose(caixaAlta,addExclamacao);

console.log(rage('aaaaaaaaaaa'))
