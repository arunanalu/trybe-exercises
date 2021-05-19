let salario = 3000;
if (salario <= 1556.94) {
  salario = salario - (salario*8)/100;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
  salario = salario - (salario*9)/100;
}
else if (salario >= 2594.93 && salario <= 5189.82) {
  salario = salario - (salario*11)/100;
}
else {
  salario = salario - 570.88;
}
if (salario >= 1903.99 && salario <= 2826.65) {
  salario = salario - ((salario*7.5)/100 - 142.80);
}
else if (salario >= 2826.66 && salario <= 3751.05) {
  salario = salario - ((salario*15)/100 - 354.80);
}
else if (salario >= 3751.06 && salario <= 4664.68) {
  salario = salario - ((salario*22.5)/100 - 636.13);
}
else if (salario >= 4664.68) {
  salario = salario - ((salario*27.5)/100 - 869.36);
}
else {
  salario = salario;
}
console.log('Seu salário líquido é igual a:', salario);