import express, { Request, Response } from "express";
import { Event } from "./classes/event";
import { User } from "./classes/user";
import { environment } from "./environment/environment";
import  IUser from "./interfaces/user";
import { addEvent } from "./model/event";
import { getAll } from "./model/listEvents";
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
  res.send('register');
});

app.post("/register", (req: Request, res: Response) => {
  let newUser = new User(req.body.email,req.body.password,req.body.pseudo)
  newUser.isExist()
  // newUser.create()
  res.send('done');
});

app.get("/login", (_req: Request, res: Response) => {
  res.send('login');
});

app.post("/login", (req: Request, res: Response) => {
  getConnect(req.body.email,req.body.password).then((data:any) =>{
    if (data){
      const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
      res.json({token :token,username: data.pseudo,id: data.id });
    }
  })
});

app.get("/events", (_req: Request, res: Response) => {
  getAll().then((data:any) => {
   res.json(data)
  })
});

app.get("/addevent", (_req: Request, res: Response) => {
  const newEvent = new Event( {
    name : "Ouaw",
    maxPrice : 100,
    startDate : "2030-11-01",
    endDate : "2030-11-01",
    id_owner : 2
})
  newEvent.addEvent()
  res.send('done')
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
