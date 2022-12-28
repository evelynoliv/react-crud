const express = require("express");
const app = express();
const mysql = require("mysql");

const dataBase = mysql.createPool({
    host: "localhost",
    user: "root",
    passqord: "Gata@212",
    database: "reactcrud",
});

app.get('/', (req, res) => {
    let SQL =
        "INSERT INTO gata (name, cost, category) VALUES (001, Gata One, 1000, Lindeza)";

    dataBase.query(SQL, (err, result) => {
        console.log(err, "ih deu erro")
    })
});


app.listen(3001, () => {
    console.log("server running")
});


