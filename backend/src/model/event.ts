
import { QueryError, RowDataPacket } from "mysql2";

import {con} from './conn'




export function addEvent(name : string, maxPrice : number, startDate : string, endDate : string, id_owner: number) {
    return new Promise((result: (value:RowDataPacket) => void, rej) => {
        con.query("INSERT INTO events (name, maxPrice, startDate, endDate, id_owner) VALUES (?,?,?,?,?)", [
            name, maxPrice, startDate, endDate, id_owner
        ], (err : QueryError, res : RowDataPacket) => {
            if (err)
                rej(err);
            else
                result(res);
        });
    });
}


export function suppEvent(id : number) {
    return new Promise((result, rej) => {
        con.query("DELETE FROM events WHERE id=?", [id], (err : QueryError, res : RowDataPacket) => {
            if (err)
                rej(err);
            else
                result(res);
        });
    });
}


export function modifEvent(name : string, maxPrice : number, id : number, id_owner : number) {
    return new Promise((result, rej) => {
        con.query("UPDATE events set name = ? , maxPrice = ? WHERE id=? and id_owner = ?", [name, maxPrice, id, id_owner], (err : QueryError, res : RowDataPacket) => {
            if (err)
                rej(err);
            else
                result(res);
        });
    });
}
module.exports = {
    addEvent,
    suppEvent,
    modifEvent
   }