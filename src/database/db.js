// importar a dependencia do sqlite3

const sqllite3 = require("sqlite3").verbose()

// criar o obejeto que ira fazer operações no banco de dados

constdb = new sqllite3.Database("./src/database/database.db")