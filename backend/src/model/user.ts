import { QueryError, RowDataPacket } from "mysql2"
import { con } from "./conn"

export function getAllUsers() {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM users ", (err:QueryError, data:RowDataPacket) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

export function addUser(email: string,mdp: string,pseudo: string) {
    return new Promise((result, reject) => {
        con.query("INSERT INTO users (email,password,pseudo) VALUES (?,?,?)", [
            email, mdp, pseudo
        ], (err: QueryError, res: RowDataPacket) => {
            if (err) reject(err)
            else result(res)
        })
    })
}

export function getConnect(login: string, mdp: string) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM users WHERE email=? AND password=?", [login,mdp], (err:QueryError, data:RowDataPacket) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

export function getByEmail(email: string) {
    return new Promise((result, reject) => {
        con.query("SELECT count(email) as nb FROM users WHERE email=?", [email], (err:QueryError, data:RowDataPacket) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}
