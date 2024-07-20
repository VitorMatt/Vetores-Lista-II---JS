// 4) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.

let saladaDeFrutas = []

do {

    saladaDeFrutas.push(prompt('Adicione uma fruta.').toLowerCase());

} while (saladaDeFrutas.indexOf('cereja')==-1);

alert('Sua salada de frutas está pronta!\nLista de frutas: ' + saladaDeFrutas);