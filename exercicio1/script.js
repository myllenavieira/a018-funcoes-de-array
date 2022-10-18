const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
const tudoMaiuscula = (objeto) => {
    return {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
}
//afraseestatodajunta
const textoCorrido = (objeto) => {
    let textoFull= `${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`
    return textoFull;
}

const realizaFuncoes = (objeto, callback) => {
    const response = callback(objeto);
    console.log(response);
}

realizaFuncoes(objeto, tudoMaiuscula);
realizaFuncoes(objeto, textoCorrido);
