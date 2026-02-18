fs = require('fs');

const conteudo = fs.readFileSync('./data/database.json', 'utf-8')
const dados =  JSON.parse(conteudo);


function adicionarTarefa(nome,descricao,data,concluida){
    const novaTarefa = {
        id: Date.now(),
        nome,
        descricao,
        data,
        concluida

    }
    dados.tarefa.push(novaTarefa)

    fs.writeFileSync('./data/database.json', JSON.stringify(dados, null, 2)); 
}


function listarTarefa(){
    const conteudo = fs.readFileSync('./data/database.json', 'utf-8')
const dados =  JSON.parse(conteudo);
    return dados.tarefa;

}

function removerTarefa(id){
    const conteudo = fs.readFileSync('./data/database.json', 'utf-8')
    const dados =  JSON.parse(conteudo);
    const removerTarefa = dados.tarefa.filter((x) => x.id !== id);
    dados.tarefa = removerTarefa
    fs.writeFileSync('./data/database.json', JSON.stringify(dados, null, 2)); 
}


function atualizarTarefa(){
    const conteudo = fs.readFileSync('./data/database.json', 'utf-8');
    const dados = JSON.parse(conteudo);
    const atualizarTarefa = dados.tarefa.find((x)=> x.id == id);

    if (atualizarTarefa !== undefined){
        dados.tarefa[dados.tarefa.indexOf(atualizarTarefa)] = {
        id,
        nome,
        descricao,
        data,
        concluida
        };
         fs.writeFileSync('./data/database.json', JSON.stringify(dados, null, 2));
    }

}
module.exports = {
    atualizarTarefa,
    removerTarefa,
    listarTarefa,
    adicionarTarefa

}
