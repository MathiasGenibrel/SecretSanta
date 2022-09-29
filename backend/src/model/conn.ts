export const mysql = require('mysql2')

export let con = mysql.createConnection({
    host: "172.18.0.1",
    user: "root",
    password: "",
    database: "secretsanta",
    port:3307
})