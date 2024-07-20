// 2) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numerosInt = []
let numerosImparesDigitados = []
let somaNumerosImpares = 0

for (i=0; i<5; i++){

    numerosInt.push(Number(prompt('Digite um número')));
}

for (i=0; i<5; i++){

    if (numerosInt[i]%2!=0){

        numerosImparesDigitados.push(numerosInt[i]);
    }
}

for (i=0; i<numerosImparesDigitados.length; i++){

    somaNumerosImpares += Number(numerosImparesDigitados[i]);
}

console.log(somaNumerosImpares);