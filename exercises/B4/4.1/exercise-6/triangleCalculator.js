let a = 30;
let b = 90;
let c = 60;
if (a <= 0 || b <= 0 || c <= 0) {
  console.log('Erro: invalid angles');
}
else {
  let resultado = (a+b+c) == 180;
  console.log(resultado);
}
