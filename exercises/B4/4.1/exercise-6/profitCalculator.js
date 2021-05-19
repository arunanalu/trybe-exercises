let custo = 200;
let valorVenda = 400;
if (custo < 0 || valorVenda < 0) {
  console.log('Erro: valores inválidos');
}
else {
  let resultado = 400-(200+(200*20)/100);
  console.log('O lucro é de:', resultado, '$');
}