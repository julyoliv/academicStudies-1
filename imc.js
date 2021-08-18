function calcularImc() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);
    var imcFinal = "";

if (imc < 18.5) {
    imcFinal = "abaixo do normal";
} else if ((imc >= 18.5) && (imc < 25)) {
    imcFinal = "normal";
} else if ((imc >= 25) && (imc <30)) {
    imcFinal = "sobrepeso";
} else if ((imc >=30) && (imc < 40)) {
    imcFinal = "obesidade";
} else {
    imcFinal = "obesidade grave";
}

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
    document.getElementById("imcResultado").innerHTML = "Seu IMC indica que seu peso está em codição: " + imcFinal;
};

function limpar() {
    document.getElementById("altura").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("imcResultado").innerHTML = "";
}
