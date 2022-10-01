import express, { NextFunction, Request, Response } from "express";
import { Event } from "./classes/event";
import { User } from "./classes/user";
import { environment } from "./environment/environment";
import { getAll } from "./model/listEvents";
import { getConnect } from "./model/user";

const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json());

// Pour la dev on a autoriser toutes les origines pour éviter les soucis de cors.
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Route qui récupére nos information du formulaire d'inscription par la méthode post 
app.post("/register", (req: Request, res: Response) => {
  // Création d'un objet User
  let newUser = new User(req.body.email,req.body.password,req.body.username)
  
  // Vérification s'il existe.
  newUser.isExist().then((data:any)=>{
    if(data){
      // Si true on retourne une erreur.
      return res.status(401).json({ message: "Compte already exist" });
    } else {
      // Si non on créer notre utilisateur.
      newUser.create()
      
      // On récupére les informations de notre utilisateur créer à partir de la BDD.
      getConnect(req.body.email,req.body.password).then((data:any) =>{
        if (data && data.length > 0){
          
          // Création d'un token
          const token = jwt.sign({username: data.pseudo, email: data.email, id: data.id }, environment.secretToken);
          return res.json({token :token,id: data[0].id,username: data[0].pseudo });
        }
        return res.status(500).send('Internal server error')
      })
      return res.status(500).send('Internal server error')
    }
  })
});

// Route qui récupére nos information du formulaire connexion par la méthode post
app.post("/login", (req: Request, res: Response) => {
  
  // On récupére les informations de notre utilisateur créer à partir de la BDD.
  getConnect(req.body.email,req.body.password).then((data:any) =>{
    if (data && data.length > 0){
      // Création d'un token
      const token = jwt.sign({username: data[0].pseudo, email: data[0].email, id: data[0].id }, environment.secretToken);
      return res.json({token :token,id: data[0].id,username: data[0].pseudo });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  })
});

// Route qui nous retournent tout les évenements
app.get("/events", (_req: Request, res: Response) => {
  getAll().then((data:any) => {
    return res.json({listEvent: data});
  })
});

// Route pour aajouter un évenement
app.get("/addevent", (_req: Request, res: Response) => {
  const newEvent = new Event( {
    name : "Ouaw",
    maxPrice : 100,
    startDate : "2030-11-01",
    endDate : "2030-11-01",
    id_owner : 2
})
  newEvent.addEvent()
  res.send('add Event')
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
