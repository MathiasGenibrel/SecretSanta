import express, { Request, Response } from "express";
import { User } from "./classes/user";
import { environment } from "./environment/environment";
import  IUser from "./interfaces/user";
import { getAllUsers, getConnect } from "./model/user";

const jwt = require('jsonwebtoken')


const app = express();

app.get("/", (_req: Request, res: Response) => {
  getAllUsers().then((data:any) => {
    let users:IUser[] = [...data]
    res.send(data);
  })
});

app.get("/register", (_req: Request, res: Response) => {
  let newUser = new User('valenti@hotmail.fr','azerty','co')
  newUser.isExist()
  // newUser.create()
  res.send('done');
});

app.get("/login", (_req: Request, res: Response) => {
  getConnect('nicolas@allforweb.fr','azerty').then((data:any) =>{
    if (data){
      const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
      res.json(token);
      /* const decoded = jwt.verify(token, environment.secretToken);
      console.log(decoded)*/
    }
  })
});

app.post("/login", (req: Request, res: Response) => {
  getConnect(req.body.email,req.body.password).then((data:any) =>{
    if (data){
      const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
      res.json(token);
    }
  })
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
