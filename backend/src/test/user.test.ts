import { User } from "../classes/user";
import { Users } from "../mocks/users.json"
import {describe, expect, test} from '@jest/globals';
//require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("User", () => {
    test("create a new user", () => {
        const user = new User(Users[0].email,Users[0].password,Users[0].pseudo,)
    
        expect(user.create()).toBe(true);
      });

    /*test("User already exist", () => {
      const user = new User(Users[0].email,Users[0].password,Users[0].pseudo,)
  
      expect(user.isExist()).toBe(false);
    });*/
});