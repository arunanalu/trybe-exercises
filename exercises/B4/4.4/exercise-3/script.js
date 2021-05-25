// let a = 4;
// let b = 8;
// let adicao = a+b;
// let subtracao = a-b;
// let multiplicacao = a*b;
// let divisao = a/b;
// let modulo = a%b;
// console.log(adicao, subtracao, multiplicacao, divisao, modulo);

function som(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a/b;
}

function mod(a, b) {
  return a%b;
}

console.log('A multiplicação de 3 por 2 é igual a:', mult(3,2));

// let a = 30;
// let b = 90;
// let c = 60;
// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log('Erro: invalid angles');
// }
// else {
//   let resultado = (a+b+c) == 180;
//   console.log(resultado);
// }

function triangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
      console.log('Erro: invalid angles');
    }
    else {
      let resultado = (a+b+c) == 180;
      return resultado;
    }
}

console.log('30°, 30° and 120° are angles of triangle? answer:', triangle(30,30,120));