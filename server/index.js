const express = require("express");
const app = express();
const cors = require("cors")
const mysql = require("mysql");

app.use(cors())
app.use(express.json())

const dataBase = mysql.createPool({
    host: "localhost",
    user: "evelyn",
    password: "Gata@212",
    database: "reactcrud",
});


app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO gata (idgata, name, cost, category) VALUES (?, ?, ?)";

    dataBase.query(SQL, [name, cost, category], (err, result) => {
        console.log(err, "ih deu erro")
    })

})


//servidor
app.listen(3001, () => {
    console.log("tá funcionando aeee!")
});





