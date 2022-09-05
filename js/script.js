let nomeDoAluno = "Bruno";

let notas = [9.4355, 7.234, 4.234, 4.183];
let somaDasNotas = parseFloat(notas[0]) + parseFloat(notas[1]) + parseFloat(notas[2]) + parseFloat(notas[3]);
let notaFinal = somaDasNotas / 4;
let notaFixada = notaFinal.toFixed(1);

let exibeNotas = document.querySelector('#notas');
let exibeFrase = document.createElement('p');

let frase = `Bem vindo ${nomeDoAluno}. Sua média final é ${notaFixada}. `;

if (notaFixada <= 6) {
    frase = frase + "Sentimos muito!";
} else {
    frase = frase + "Parabéns!";
}

exibeFrase.innerHTML = frase;
exibeFrase.classList.add('fraseDaMedia');
exibeNotas.appendChild(exibeFrase);

console.log(`Bem vindo ${nomeDoAluno}. Sua média final é ${notaFixada}`);