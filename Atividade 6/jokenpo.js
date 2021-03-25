var user = parseInt(window.prompt("*---Jokenpô---*\n" + "Digite 1 para Pedra\n" + "Digite 2 para Papel\n" + "Digite 3 para Tesoura"));
var computer = Math.random() * 100;

if (computer > 0 && computer < 34){
    computer = 1;
}
else if(computer > 33 && computer < 67){
    computer = 2;
}
else if(computer > 66 && computer < 100){
    computer = 3;
}

if(user == computer){
    alert("Empate");
}
else if(user == 1 && computer == 3){
    alert("Parabéns Você Ganhou! :)");
}
else if(user == 3 && computer == 1){
    alert("O Computador Ganhou! :(");
}
else if(user == 3 && computer == 2){
    alert("Parabéns Você Ganhou! :)");
}
else if(user == 2 && computer == 3){
    alert("O Computador Ganhou! :(");
}
else if(user == 2 && computer == 1){
    alert("Parabéns Você Ganhou! :)");
}
else if(user == 1 && computer == 2){
    alert("O Computador Ganhou! :(");
}



