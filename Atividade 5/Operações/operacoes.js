var num1 = parseFloat(window.prompt("Digite o primeiro número!"));
var num2 = parseFloat(window.prompt("Digite o segundo número!"));

var soma = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var restodiv = num1 % num2;

window.alert("A soma entre os dois números é: " + soma);
window.alert("A subtração do primeiro pelo segundo número é: " + sub);
window.alert("O produto entre os dois números é: " + mult);
window.alert("A divisão do primeiro pelo segundo número é: " + div);
window.alert("O resto da divisão do primeiro pelo segundo numero é: " + restodiv);