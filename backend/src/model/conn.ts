import { environment } from "../environment/environment"

import  mysql  from "mysql2";
import { getConnect } from "./user";

// Creation d'une connection à notre base de données. 
const getConnection:mysql.Connection | any = ()=>{
    try{
        const con = mysql.createConnection({
            host: environment.database.hostname,
            user: environment.database.user,
            password: environment.database.password,
            database: environment.database.database,
            port: parseInt(environment.database.port)
        })
        return con
    } catch(err){
        console.log(err)
        return setTimeout(getConnection,1e3)
    }
}


export const con = getConnection() as mysql.Connection
