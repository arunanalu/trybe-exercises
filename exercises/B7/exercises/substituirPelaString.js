
const substituir = (frase, palavra) => {
    let res = frase.split(' ');
    res.forEach((element, index) => {
        if (element === 'x') {
            res[index] = palavra;
        }
    });
    console.log(res.join(' '));
}

substituir('Uma frase qualquer x', 'aqui')