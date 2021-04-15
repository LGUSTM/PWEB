function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
};

function calculaArea() {
    var result = this.base * this.altura;
    alert(result);
}

var Retangulo = new Retangulo(10, 20);
Retangulo.calculaArea = calculaArea;

Retangulo.calculaArea();