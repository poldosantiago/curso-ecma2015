var mediaAluno = (n1,n2,n3) => ((n1 + n2 + n3)/3).toFixed(1);
var notas = [3,5,6,7];


console.log(mediaAluno.apply(null, notas)); // metodo antigo ES5
console.log(mediaAluno(...notas)); //ES6
