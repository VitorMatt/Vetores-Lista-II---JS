// 3) Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada (primeiro os elementos de um, depois os de outro) e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let vetorUm = []
let vetorDois = []
let vetorTres = []

for (i=0; i<3; i++){

    vetorUm.push(Number(prompt('Digite um número')));
}

for (i=0; i<3; i++){

    vetorDois.push(Number(prompt('Digite um número')));
}

for (i=0; i<vetorUm.length; i++){

    vetorTres.push(vetorUm[i]);
    vetorTres.push(vetorDois[i]);
}

alert('Primeiro vetor: ' + vetorUm + '\nSegundo vetor: ' + vetorDois + '\nVetor com os valores do primeiro e do segundo intercalados: ' + vetorTres);