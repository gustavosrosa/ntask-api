/**
 * Arquivo de configuração de acesso a banco de dados da aplicação
 * Ex.: Como se fosse um application.properties
 */
module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite", // Qual é o banco de dados que será utilizado
        storage: "ntask.sqlite", // Diretório onde será gravado o arquivo da base de dados
        define: {
            underscored: true // Campos da tabela vem sempre com minúsculo com underscore no lugar dos espaços
        }
    }
}