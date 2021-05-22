/* faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

passo 1: interpretação

devo utilizar um n e atribuir um valor maior que um a ele 

devo montar uma linha preenchida por n asterísticos, e repetir essa linha n vezes

para fazer isso, devo criar uma variável resposta que será uma string vazia, e um laço de repetição para concatenar n asterísticos dentro da mesma string

e por fim, devo imprimir essa string n vezes

passo 2: algorítimo

criar uma variável com valor n > 1

criar uma variável resposta que será uma string vazia

fazer um laço de repetição para adicionar n asterísticos na string

fazer um laço de repetição, com um console.log para imprimir a string n vezes

passo 3: código */

let n = 4;
let resposta = '';
for (let index = 0; index < n; index += 1) {
  resposta += '*'
}
for (let index = 0; index < n; index += 1) {
  console.log(resposta);
}

