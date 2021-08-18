var readline = require("readline");
var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

var numAleatorio = Math.round(Math.random()* 100);
if (numAleatorio === 0) {
    console.log(numAleatorio === 1);
};

var numTentativas = 10;

function pergunta() {rl.question("Digite um número: ", function (numero){
    numero = parseInt(numero);
    numTentativas--;
    if (numero === numAleatorio) {
        console.log("Parabéns, você acertou!");

    } else if (numTentativas === 0) {
        console.log("Você perdeu :(");
        rl.close();
    } else if (numero > numTentativas) {
        console.log("Número errado! Você tem " + numTentativas + " tentativas. O número informado é maior que o sorteado!");
        pergunta();
    } else {
        console.log("Número errado! Você tem " + numTentativas + " tentativas. O número informado é menor que o sorteado!");
        pergunta();
    }

});
}