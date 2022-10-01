import express, { Request, Response } from "express";
import { Event } from "./classes/event";
import { IEventConfig } from "./interfaces/event";
import { getAll } from "./model/listEvents";
import { addEvent, suppEvent, modifEvent } from "./model/event";

const event = require ('./classes/event');

const app = express();

app.get("/events", (_req: Request, res: Response) => {
  getAll().then((data:any) => {
   res.json(data)
})

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
