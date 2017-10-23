function tag(strings, ...values){
  console.log(strings);
  console.log(values);
  return 'outro valor';
}

var aluno = 'Gui';
var aprovado = 'aprovado';

console.log(tag `${aluno} está ${aprovado}`);
