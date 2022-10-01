import { environment } from "../environment/environment"

import  mysql  from "mysql2";

export const con = mysql.createConnection({
    host: environment.database.hostname,
    user: environment.database.user,
    password: environment.database.password,
    database: environment.database.database,
    port: parseInt(environment.database.port)
})