const { query } = require("express")

// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações nco banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados, para nossas operações
db.serialize (() => {

//     com comandos SQL eu vou:

//     1 criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //4 deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [17], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso! ")
    // })



//     3 consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err,rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros:")
        console.log(rows)


    })

       

})