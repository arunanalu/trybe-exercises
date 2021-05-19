let pieces = 'QuEeN';
let piece = pieces.toLowerCase();

/* if (piece == 'queen') {
  console.log('Any direction');
}
else if (piece == 'king') {
  console.log('Any direction');
}
else if (piece == 'rook') {
  console.log('Vertical and horizontal');
}
else if (piece == 'bishop') {
  console.log('Diagonals');
}
else if (piece == 'knight') {
  console.log('L movement');
}
else if (piece == 'pawn') {
  console.log('Vertical and diagonal only on the start');
}
else {
  console.log('Wrong name');
} */

switch (piece) {
  case 'queen':
    console.log('Any direction');
    break;
  case 'king':
    console.log('Any direction');
    break;
  case 'rook':
    console.log('Vertical and horizontal');
    break;
  case 'bishop':
    console.log('Diagonals');
    break;
  case 'knight':
    console.log('L movement');
    break;
  case 'pawn':
    console.log('Vertical and diagonal only on the start');
    break;
  default:
    console.log('Wrong name');
}