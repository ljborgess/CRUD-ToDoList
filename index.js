const { NOMEM } = require('node:dns');
const userService = require('./service/userSevice.js');

userService.adicionarTarefa(
    "Lucas Andrade",
    "Realizar a tarefa de casa",
    "18-02-2026",
     "Concluida",
     console.log('Tarefa adicionada com sucesso!')
)

userService.removerTarefa(1771428845047)
console.log('Este ID foi removido!')  

const lista = userService.listarTarefa()
console.log(lista)

