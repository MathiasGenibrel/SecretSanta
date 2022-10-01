import express, { Request, Response } from "express";
import { User } from "./classes/user";
import { environment } from "./environment/environment";
import { getAllUsers, getConnect } from "./model/user";

const jwt = require('jsonwebtoken')


const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  /*getAllUsers().then((data:any) => {
    let users:IUser[] = [...data]
    res.send(data);
  })*/
  res.send('/');
});

app.get("/register", (_req: Request, res: Response) => {
  res.send('register');
});

app.post("/register", (req: Request, res: Response) => {
  let newUser = new User(req.body.email,req.body.password,req.body.pseudo)
  newUser.isExist()
  // newUser.create()
  res.send('register');
});

app.get("/login", (_req: Request, res: Response) => {
  res.send('login')
});

app.post("/login", (req: Request, res: Response) => {
  getConnect(req.body.email,req.body.password).then((data:any) =>{
    if (data){
      const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
      res.json({token :token,id: data[0].id,username: data[0].pseudo });
      /* const decoded = jwt.verify(token, environment.secretToken);
      console.log(decoded)*/
    }
  })
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
