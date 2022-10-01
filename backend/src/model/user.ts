import { QueryError, RowDataPacket } from "mysql2"
import { con } from "./conn"

// Requete qui récupére tout les utilisateurs.
export function getAllUsers() {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM users ", (err:QueryError, data:RowDataPacket) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

// Requete qui ajoute un utilisateur
export function addUser(email: string,mdp: string,pseudo: string) {
    return new Promise((result, reject) => {
        con.query("INSERT INTO users (email,password,pseudo) VALUES (?,?,?)", [
            email, mdp, pseudo
        ], (err, res) => {
            if (err) reject(err)
            else result(res)
        })
    })
}

// Requete qui récupére les informations de l'utilisateur lors de la connection.
export function getConnect(login: string, mdp: string) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM users WHERE email=? AND password=?", [login,mdp], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

// Requete récupération d'un utilisateur par son email.
export function getByEmail(email: string) {
    return new Promise((result, reject) => {
        con.query("SELECT count(email) as nb FROM users WHERE email=?", [email], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

// Requete qui supprime un utilisateur par son ID.
export function suppUser(id: number) {
    return new Promise((result, rej) => {
        con.query("DELETE FROM users WHERE id=?", [id], (err: any, res: any) => {
            if (err) rej(err)
            else result(res)
        })
    })
}
