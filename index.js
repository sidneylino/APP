// arrays, objetos:

//array
let metas = ["mayk", "alo"]
console.log(metas[1] + ", " + metas[0])

//objeto
let meta = {
    value: "ler um livro por mes",
    check: false,
    log: (info) => {
        console.log(info)
    }
}
console.log(meta.value)
meta.log(meta.value)

//arrow function 
//const criarMeta = () => {}

//function criarMeta() {}