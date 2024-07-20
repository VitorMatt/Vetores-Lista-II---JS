// 8) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

let numeros = [];
let somaMultiplicacoes = 0;
let numero;
let numeroMaior = 0;

for (i=0; i<5; i++){

    numero = Number(prompt('Digite um número.'));
    numeros.push(numero);
    
    if (numero>numeroMaior){

        numeroMaior = numero;
    }
}

for (i=0; i<numeros.length - 1; i++){

    somaMultiplicacoes = somaMultiplicacoes + (numeros[i] * numeroMaior);
}

console.log(somaMultiplicacoes);