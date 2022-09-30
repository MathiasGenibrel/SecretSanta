import express, { Request, Response } from "express";
import { User } from "./classes/user";
import { IUser } from "./interfaces/user";
import { getAllUsers, getConnect } from "./model/user";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  getAllUsers().then((data:any) => {
    let users:IUser[] = [...data]
    res.send(users);
  })

});

app.get("/register", (_req: Request, res: Response) => {
  let newUser = new User('valenti@hotmail.fr','azerty','co')
  newUser.isExist()
  // newUser.create()
  res.send('done');
});

app.get("/connexion", (req: Request, res: Response) => {
  getConnect(req.body.login,req.body.password).then((data:any) =>{
    if (data){
      res.send('connect');
    } else {
      res.send('no connect'); 
    }
  })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
