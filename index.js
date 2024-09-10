// arrays, objetos:

//array
let meta = {
    value: "ler um livro por mês",
    checked: true,
}
//objeto
let metas = [
    meta,
    {
        value: "ler um livro por mes",
        checked: false,
    }
]

console.log(metas[1].value)