/* Depois, faça uma pirâmide com n asteriscos de base:

criar uma variável n > 1 e ímpar 

a base da pirâmede vai ser igual a n, e a pirâmide vai diminuir 1 no começo
e no final conforme vai subindo, substituindo esses * diminuídos com espaço.
pensando no sentido contrário (o que vai ser construído neste código), a pirâmede vai começar com um * no meio e vai aumentar um asterístico no começo e no final até chegar ao número n (que vai ser a base).

para isso, vamos pegar n e diminuir 2 (a quantidade de espaços dos 2 lados), até que o resultado seja 1 (o asterístico do topo), a quantidade de diminuições do 2 representa a quantidade de espaços que o primeiro * vai ter que ter no começo pra ficar centralizado, e esse espaço vai diminuir até chegar a 0 na base da pirâmede 


algoritmo 

criar variável n > 1 e ímpar

criar unidade espaços = 0

criar uma array nString = []

criar um laço de repetição para diminuir 2 unidades de n, até n = 1, e guardar o número de repetições na variável espaços 

criar um laço de repetição para adicionar os espaços na array

adicionar o primeiro asterístico na array e imprimir a primeira linha dela

construir um laço de repetição que vai adicionar um asterístico, diminuir um espaço no começo da array, e vai printar. A cada repetição, o laço deve diminuir a quantidade de espaços em 1, e aumentar a quantidade de asterísticos em 2. A quantidade de espaços é a quantidade de repetições

código */

let n = 5;
if (n%2 == 0) {
  console.log('O número é par. Insira outro número');
}
else {
  let espacos = 0;
  let nString = [];
  for (index = n; index > 1; index -= 2) {
    espacos += 1;
  }
  for (index = espacos; index > 0; index -= 1) {
    nString.push(' ');
  }
  nString.push('*');
  console.log(nString.join(""));
  for (index = espacos; index > 0; index -= 1) {
    nString.shift();
    nString.push('*', '*');
    console.log(nString.join(""));
   }
}

