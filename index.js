const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "tomar 3L de agua por dia",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia")
        return
    }

    metas.push(
        {value: meta, checked: false}
    )
} 

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })
    if(respostas.length == 0) {
        console.log("nenhuma meta selecionada")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked == true;
    })
    console.log("metas concluidas")
}


const start = async() => {

    while(true){

        const opcao = await select({
            message: "menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                }
                ,
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break

            case "listar":
                await listarMetas()
                break

            case "sair":
                console.log('até a proxima')
                return
        }
    }

}
start()
 