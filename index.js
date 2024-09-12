const { select } = require('@inquirer/prompts')

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
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                console.log('vamos cadastrar') // faz loop
                break

            case "listar":
                console.log('vamos listar') // faz loop
                break

            case "sair":
                return
        }
    }
}
start()