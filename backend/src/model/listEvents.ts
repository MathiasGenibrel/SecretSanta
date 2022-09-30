import { QueryError, RowDataPacket } from "mysql2";

import {con} from './conn'


export function getAll() {
    return new Promise((result : (value:RowDataPacket) => void, rej) => {
        con.query("SELECT id,name,maxPrice,startDate,endDate,id_owner FROM events", (err : QueryError, res : RowDataPacket) => {
            if (err)
                rej(err);
            else
                result(res);
        });
    });
}

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

module.exports = {
  getAll
  ,addEvent
 }