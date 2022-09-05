var nome = "Bruno";

var notaDoPrimeiroBimestre = 9.4355;
var notaDoSegundoBimestre = 7.234;
var notaDoTerceiroBimestre = 4.234;
var notaDoQuartoBimestre = 2.183;

let exibeNotas = document.querySelector('#notas');

let nota1 = document.createElement('p');
nota1.textContent = notaDoPrimeiroBimestre;

let nota2 = document.createElement('p');
nota2.textContent = notaDoSegundoBimestre;

let nota3 = document.createElement('p');
nota3.textContent = notaDoTerceiroBimestre;

let nota4 = document.createElement('p');
nota4.textContent = notaDoQuartoBimestre;

var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre;

var notaFinal = somaDasNotas / 4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log(somaDasNotas);
console.log(notaFinal);
console.log(notaFixada);