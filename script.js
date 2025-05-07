// script.js

function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("mensagem").innerText = `Soma: ${resultado.toFixed(2)}`;
}

function subtrair() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("mensagem").innerText = `Subtração: ${resultado.toFixed(2)}`;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("mensagem").innerText = `Multiplicação: ${resultado.toFixed(2)}`;
}

function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("mensagem").innerText = "Não é possível dividir por zero." 
    } else {
        let resultado = num1 / num2;
    document.getElementById("mensagem").innerText = `Divisão: ${resultado.toFixed(2)}`;
    }
    
}
 function verificarParOuImpar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let resultado;

    if (num1 % 2 === 0) {
        resultado = "par";
    } else {
        resultado = "ímpar";
    }

    document.getElementById("mensagem").innerText = `O número ${num1} é ${resultado}.`;
}