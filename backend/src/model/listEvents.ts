import { QueryError, RowDataPacket } from "mysql2";

import {con} from './conn'

// Founction qui récupere les events
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



module.exports = {
  getAll
 }