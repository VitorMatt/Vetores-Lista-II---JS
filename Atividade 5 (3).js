// 5) Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos)

let numerosAleatorios = []

for (i=0; i<10; i++){

    let numero = Math.floor(Math.random() * 20);

    if (numerosAleatorios.includes(numero)){

        i--
    } else {

        numerosAleatorios.push(numero);
    }
}

console.log(numerosAleatorios);