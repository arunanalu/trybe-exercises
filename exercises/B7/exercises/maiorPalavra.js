const maiorPalavra = (frase) => {
    let result = '';
    frase.split(' ').forEach(element => {
        if (element.length > result.length) {
            result = element;
        }
    });
    console.log(result);
}

maiorPalavra('Bom dia, que manhã maravilhosa')
