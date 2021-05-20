let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('Os valores contidos no array são: ', numbers);
let soma = 0;
for (let numero of numbers) {
  soma = soma + numero;
}
console.log('A soma dos valores é: ', soma);
let media = soma/numbers.length
console.log('A média aritmética é: ', media);
if (media > 20) {
  console.log('O valor é maior que 20');
}
else {
  console.log('O valor é menor ou iugal a 20');
}
let maiorValor = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log('O maior valor é: ', maiorValor);
let numerosImpares = 0;
for (index2 = 0; index2 < numbers.length; index2 +=1) {
  if (numbers[index2]%2 != 0) {
    numerosImpares = numerosImpares + 1;
  } 
}
if (numerosImpares == 0) {
  console.log('Nenhum valor ímpar encontrado');
}
else {
  console.log('Quantidade de valores ímpares: ', numerosImpares);
}
let menorValor = numbers[0];
for (index3 = 0; index3 < numbers.length; index3 += 1) {
  if (numbers[index3] < menorValor) {
    menorValor = numbers[index3];
  }
}
console.log('O menor valor é: ', menorValor);
let umAVinteCinco = [];
for (index4 = 1; index4 < 26; index4 += 1) {
  umAVinteCinco.push(index4);
}
console.log('Numeros de 1 a 25', umAVinteCinco);
for (let divisao of umAVinteCinco) {
  divisao = divisao/2;
  console.log('A divisão dos números acima por 2 é: ', divisao);
}