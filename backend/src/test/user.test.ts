import { User } from "../classes/user";
import { Users } from "../mocks/users.json"
import {describe, expect, test} from '@jest/globals';
//require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("User valide", () => {
  test("create a new user", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    expect(user.create()).toBe(true);
  });

  test("User not exist", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    user.isExist().then((data:any) =>{
      expect(data).toBe(false);
    })
  });

  test("User register is valid", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    expect(user.isValid()).toBe(true);
  });

  test("Delete User", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    expect(user.suppUser()).toBe(true);
  });

  test("GET user email", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    expect(user.Email).toBe(Users[0].email);
  });

  test("GET user pseudo", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo)
    expect(user.pseudo).toBe(Users[0].pseudo);
  });

  test("GET user id", () => {
    const user = new User(Users[0].email,Users[0].password,Users[0].pseudo,parseInt(Users[0].id))
    expect(user.id).toBe(parseInt(Users[0].id));
  });

});

describe("User not valide", () => {
  test("create a new user", () => {
    const user = new User(Users[1].email,Users[1].password,Users[1].pseudo)
    expect(user.create()).toBe(false);
  });

  test("User already exist", () => {
    const user = new User(Users[1].email,Users[1].password,Users[1].pseudo)
    user.isExist().then((data:any) =>{
      expect(data).toBe(true);
    })
  });

  test("User register not valid", () => {
    const user = new User(Users[1].email,Users[1].password,Users[1].pseudo)
    expect(user.isValid()).toBe(false);
  });
});