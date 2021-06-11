document.querySelector('#enviar').addEventListener('click', (evento) => {
  evento.preventDefault();
  const inputs = document.getElementsByTagName('input');
  const select = document.getElementById('selectEstado');
  const textArea = document.getElementById('textCurriculo');
  for (let index = 0; index < inputs.length; index += 1) {
    console.log(inputs[index].value);
    if (inputs[index].value === '') {
      alert('Campo vazio!');
      break;
    }
  }
  console.log(select.options[select.selectedIndex].value);
  console.log(textArea.value);
});
