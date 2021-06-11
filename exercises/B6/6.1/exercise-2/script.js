function converterObjParaStr(obj) {
  let str='';
  for(let index in obj){
    if (typeof obj[index] == 'string') {
        str += index + ': ' + obj[index]+'; </br>';
    } else {
        str += index + ': { </br>' + print(obj[index]) + '}';
    }
  }
  return str;
};

// Nesse evento, eu capturo todos os inputs e coloco o value deles em um objeto, usando o name dos mesmos inputs como a chave para os valores armazenados no objeto. depois, uso a função acima para converter o objeto para String, e aplico na div

document.querySelector('#enviar').addEventListener('click', (evento) => {
  evento.preventDefault();
  const inputs = document.getElementsByTagName('input');
  const select = document.getElementById('selectEstado');
  const textArea = document.getElementById('textCurriculo')
  const resultadoDiv = document.getElementById('resultadoDiv');
  const resultadoDivPai = document.getElementById('resultadoDivPai');
  let resultado = {};
  for (let index = 0; index < inputs.length; index += 1) {
    // console.log(inputs[index].value);
    resultado[inputs[index].name]=inputs[index].value;
    if (inputs[index].value === '') {
      return alert('Campo vazio!');
    }
  }
  // console.log(select.options[select.selectedIndex].value);
  // console.log(textArea.value);
  resultado[select.name]=select.options[select.selectedIndex].value;
  resultado[textArea.name]=textArea.value;
  // console.log(resultado);
  //resultadoDiv.innerHTML = JSON.stringify(resultado, null, 4);
  resultadoDiv.innerHTML = converterObjParaStr(resultado);
  resultadoDivPai.style.display = 'block';
});

