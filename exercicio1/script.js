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

const textoCorrido = (objeto) => {
    return {
        nome: objeto.nome.split(" ").join(""),
        profissao: objeto.profissao.split(" ").join(""),
        username: objeto.username.split(" ").join(""),
        senha: objeto.senha.split(" ").join("")
    }
}

const realizaFuncoes = (objeto, callback) => {
    const response = callback(objeto);
    console.log(response);
}

realizaFuncoes(objeto, tudoMaiuscula);
realizaFuncoes(objeto, textoCorrido);
