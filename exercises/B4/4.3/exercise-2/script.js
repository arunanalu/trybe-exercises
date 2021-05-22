/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

primeiro passo: interpretação

criar uma variável n > 1

como vamos imprimir um triângulo retângulo, a cada linha a quantidade de asterísticos deve aumentar, até chegar na base, onde a quantidade vai ser igual a n

criar uma variável tipo string para concatenar mais asterísticos, e dentro de uma estrutura de repetição, cada vez que um asterístico for concatenado, já ai imprimir com console.log

segundo passo: algorítmo

criar variável n > 1

criar string com valor ''

criar um laço de repetição que vai se repetir n vezes

dentro do laço, concatenar a string com '*' e a cada concatenação imprimir o resultado 

terceiro passo: código */ 

let n = 8;
let nString = '';
for (index = 0; index < n; index += 1) {
  nString += '*';
  console.log(nString);
}