let a = 4;
let b = 2;
let c = 8;

if (a > b && a > c) {
  console.log('O maior número é:', a );
}
else if (b > a && b > c) {
  console.log('O maior número é:', b);
}
else if (c > a && c > b) {
  console.log('O maior número é:', c);
}
else {
  console.log('Os números são iguais');
}