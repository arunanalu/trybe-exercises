function palindromo (palavra) {
  let palavraAoContrario = [] ;
  let cont = 0;
  for (let index = (palavra.length)-1; index >= 0; index -= 1){
    palavraAoContrario[cont] = palavra[index];
    cont += 1;
  }
  cont = 0;
  let simOuNao = false;
  for (let index of palavraAoContrario) {
    simOuNao = index == palavra[cont];
    if (simOuNao == false) {
      return simOuNao;
      break;
    }
    cont += 1;
  }
  return simOuNao;
}

console.log(palindromo('ovo'));

