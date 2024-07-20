// 1) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

let numeros = []
let somatorioPrimeiraMetade = 0
let somatorioSegundaMetade = 0
let resultadoFinal

for (i=0; i<10; i++){

    numeros.push(Number(prompt('Adicione um número')));
}

for (i=0; i<5; i++){

    somatorioPrimeiraMetade += numeros[i];
}

for (i=5; i<10; i++){

    somatorioSegundaMetade += numeros[i];
}

resultadoFinal = somatorioPrimeiraMetade - somatorioSegundaMetade;

alert('Resultado: ' + resultadoFinal);