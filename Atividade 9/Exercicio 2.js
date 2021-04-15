function Conta() {
    var nomeCorrentista;
    this.getNomeCorrentista = function () {
        return nomeCorrentista;
    };
    this.setNomeCorrentista = function (value) {
        nomeCorrentista = value;
    };
    
    var banco;
    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };

    var numConta;
    this.getNumConta = function () {
        return numConta;
    };
    this.setNumConta = function (value) {
        numConta = value;
    };
    
    var saldo;
    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
}

function ContaCorrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    };
}

function ContaPoupanca() {
    var juros;
    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    var dataVencimento;
    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    };
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();


nContaCorrente = new ContaCorrente();
nContaPoupanca = new ContaPoupanca();

nContaCorrente.setNomeCorrentista('Pedro Vieira');
nContaCorrente.setBanco('Santander');
nContaCorrente.setNumConta('13-29391');
nContaCorrente.setSaldo(1250.00);
nContaCorrente.setSaldoEspecial(100.00);

nContaPoupanca.setNomeCorrentista('João Silva');
nContaPoupanca.setBanco('Bradesco');
nContaPoupanca.setNumConta('10-51565');
nContaPoupanca.setSaldo(300.00);
nContaPoupanca.setJuros(0.012);
nContaPoupanca.setDataVencimento('14/04/2023');

alert( 'Conta Correntista\n' + nContaCorrente.getNomeCorrentista() + '\n' + nContaCorrente.getBanco() + 
'\n' + nContaCorrente.getNumConta() + '\n' + nContaCorrente.getSaldo() + '\n' + nContaCorrente.getSaldoEspecial() +
'\nConta Poupança\n' + nContaPoupanca.getNomeCorrentista() + '\n' + nContaPoupanca.getBanco() + 
'\n' + nContaPoupanca.getNumConta() + '\n' + nContaPoupanca.getSaldo() + '\n' + nContaPoupanca.getJuros() + '\n' + nContaPoupanca.getDataVencimento());