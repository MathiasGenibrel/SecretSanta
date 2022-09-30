import express, { Request, Response } from "express";
import { Event } from "./classes/event";
import { IEventConfig } from "./interfaces/event";
import { getAll } from "./model/listEvents";
import { addEvent, suppEvent, modifEvent } from "./model/event";

const event = require ('./classes/event');

const app = express();

app.get("/", (_req: Request, res: Response) => {
  getAll().then((data:any) => {
   res.send(data)
})

  let a = new Event('TNicolasAPasBcpDormit',200,'2022-09-09','2022-10-10',1)
  a.eventValid()

  // suppEvent(15)

  // modifEvent('MathiasTropPaye', 50000, 1, 1)

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
