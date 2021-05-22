/* Agora inverta o lado do triângulo

criar uma variável de valor n > 1 

criar uma array que começa com n espaços vazios, para isso, usar uma estrutura de repetição que vai adicionar esses espaços vazios nela 

utilizar uma estrutura de repetição, que vai acrescentar um '*' no final e remover um espaço do começo, n vezes, e a cada vez printar usando console.log
 */

let n = 5; 
let nArray = [];
for (index = 0; index < n; index += 1) {
  nArray.push(' ');
}
for (index = 0; index < n; index += 1) {
  nArray.shift();
  nArray.push('*');
  console.log(nArray.join(""));
}
