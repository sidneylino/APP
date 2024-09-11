const start = () => {

    while(true){
        let opcao = "sair"
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