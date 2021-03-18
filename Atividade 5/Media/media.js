var nome = window.prompt("Digite o nome do Aluno");
var nota1 = parseFloat(window.prompt("Digite a 1ª nota do aluno: "));
var nota2 = parseFloat(window.prompt("Digite a 2ª nota do aluno: "));
var nota3 = parseFloat(window.prompt("Digite a 3ª nota do aluno: "));

var media = (nota1+nota2+nota3) / 3;

window.alert("A média do aluno " + nome + " é: "+ media);
