import {describe, expect, test} from '@jest/globals'
import { environment } from '../environment/environment';
import  mysql  from "mysql2";


describe("mysql", () => {
    test("create conn mysql", () => {
        const con = mysql.createConnection({
            host: environment.database.hostname,
            user: environment.database.user,
            password: environment.database.password,
            database: environment.database.database,
            port: parseInt(environment.database.port)
        }) as any
    
        /*expect(con).toBe(true);*/
      });

    
});