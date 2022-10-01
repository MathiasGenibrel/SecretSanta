import express, { Request, Response } from "express";
import { User } from "./classes/user";
import { environment } from "./environment/environment";
import { getAllUsers, getConnect } from "./model/user";

const jwt = require('jsonwebtoken')


const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send('/');
});

app.get("/register", (_req: Request, res: Response) => {
  res.send('register');
});

app.post("/register", (req: Request, res: Response) => {
  let newUser = new User(req.body.email,req.body.password,req.body.pseudo)
  newUser.isExist().then((data:any)=>{
    if(data){
      return res.status(401).json({ message: "Compte already exist" });
    } else {
      newUser.create()
      getConnect(req.body.email,req.body.password).then((data:any) =>{
        if (data && data.length > 0){
          const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
          return res.json({token :token,id: data[0].id,username: data[0].pseudo });
        }
      })
    }
  })
});

app.get("/login", (_req: Request, res: Response) => {
  res.send('login')
});

app.post("/login", (req: Request, res: Response) => {
  getConnect(req.body.email,req.body.password).then((data:any) =>{
    if (data && data.length > 0){
      let newUser = new User(data[0].email,data[0].password,data[0].pseudo,data[0].id)
      console.log(newUser.id)
      const token = jwt.sign({username: data[0].pseudo, email: data[0].email, id: data[0].id }, environment.secretToken);
      return res.json({token :token,id: data[0].id,username: data[0].pseudo });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  })
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
