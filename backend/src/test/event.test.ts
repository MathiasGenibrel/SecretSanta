import { Event } from "../classes/event";
import { Events } from "../mocks/events.json";
import {describe, expect, test} from '@jest/globals';
import * as iconv from 'iconv-lite';

import { QueryError, RowDataPacket } from "mysql2";
import {con} from '../model/conn'
import { modifEvent } from "../model/event";




describe("addEvent", () => {
    test("Creation d'un event qui fonctionne",() => {
        const event = new Event( {
            name : Events[0].name,
            maxPrice : parseInt(Events[0].maxPrice),
            startDate : Events[0].startDate,
            endDate : Events[0].endDate,
            id_owner : parseInt(Events[0].id_owner)
        });

        expect(event.eventValid()).toBeUndefined();
        })



    test("Creer un event avec prix trop élévé",() => {
        const event = new Event( {
            name : Events[1].name,
            maxPrice : parseInt(Events[1].maxPrice),
            startDate : Events[1].startDate,
            endDate : Events[1].endDate,
            id_owner : parseInt(Events[1].id_owner)
        });


        expect(()=>event.eventValid()).toThrow("prix trop élevé");
        })

    test("Creer un event avec un nom invalide",() => {
        const event = new Event( {
            name : Events[2].name,
            maxPrice : parseInt(Events[2].maxPrice),
            startDate : Events[2].startDate,
            endDate : Events[2].endDate,
            id_owner : parseInt(Events[2].id_owner)
        });


        expect(()=>event.eventValid()).toThrow("Nom invalide ou ne peux pas être null");
        })
});


describe("modifEvent", () => {
    test("modification d''un event, tout les champs sont renseigné",() => {
        const event = new Event( {
            name : Events[0].name,
            maxPrice : parseInt(Events[0].maxPrice),
            startDate : Events[0].startDate,
            endDate : Events[0].endDate,
            id_owner : parseInt(Events[0].id_owner)
        });

        expect(event.eventValid()).toBeUndefined();
        })



    test("modification d''un evenement avec un prix trop élévé",() => {
        const event = new Event( {
            name : Events[1].name,
            maxPrice : parseInt(Events[1].maxPrice),
            startDate : Events[1].startDate,
            endDate : Events[1].endDate,
            id_owner : parseInt(Events[1].id_owner)
        });


        expect(()=>event.eventValid()).toThrow("prix trop élevé");
        })

    test("modification d''un evenement avec un nom invalide",() => {
        const event = new Event( {
            name : Events[2].name,
            maxPrice : parseInt(Events[2].maxPrice),
            startDate : Events[2].startDate,
            endDate : Events[2].endDate,
            id_owner : parseInt(Events[2].id_owner)
        });


        expect(()=>event.eventValid()).toThrow("Nom invalide ou ne peux pas être null");
        })

});


describe("suppEvent", () => {
    test("supprime un event vue qu'il existe",() => {
        const event = new Event( {
            id : parseInt(Events[0].id),
            name : Events[0].name,
            maxPrice : parseInt(Events[0].maxPrice),
            startDate : Events[0].startDate,
            endDate : Events[0].endDate,
            id_owner : parseInt(Events[0].id_owner)      
        });
        event.eventExist().then((data : any) => {
            expect(data).toBe(true);
        })
    });
});


describe("getClasseEvent", () => {

    test("test du get it de la classe event",() => {
   const event = new Event( {
    id : parseInt(Events[0].id),
    name : Events[1].name,
    maxPrice : parseInt(Events[1].maxPrice),
    startDate : Events[1].startDate,
    endDate : Events[1].endDate,
    id_owner : parseInt(Events[1].id_owner) 
      
    });

    expect(event.id).toBe( parseInt(Events[0].id));
   });

   test("test du get it de la classe event",() => {
    const event = new Event( {
     id : parseInt(Events[0].id),
     name : Events[1].name,
     maxPrice : parseInt(Events[1].maxPrice),
     startDate : Events[1].startDate,
     endDate : Events[1].endDate,
     id_owner : parseInt(Events[1].id_owner) 
       
     });
 
     expect(event.name).toBe(Events[1].name);
    });

    test("test du get it de la classe event",() => {
        const event = new Event( {
         id : parseInt(Events[0].id),
         name : Events[1].name,
         maxPrice : parseInt(Events[1].maxPrice),
         startDate : Events[1].startDate,
         endDate : Events[1].endDate,
         id_owner : parseInt(Events[1].id_owner) 
           
         });
     
         expect(event.maxPrice).toBe(parseInt(Events[1].maxPrice));
        });

        
    test("test du get it de la classe event",() => {
        const event = new Event( {
         id : parseInt(Events[0].id),
         name : Events[1].name,
         maxPrice : parseInt(Events[1].maxPrice),
         startDate : Events[1].startDate,
         endDate : Events[1].endDate,
         id_owner : parseInt(Events[1].id_owner) 
           
         });
     
         expect(event.startDate).toBe(Events[1].startDate);
        });

        test("test du get it de la classe event",() => {
            const event = new Event( {
             id : parseInt(Events[0].id),
             name : Events[1].name,
             maxPrice : parseInt(Events[1].maxPrice),
             startDate : Events[1].startDate,
             endDate : Events[1].endDate,
             id_owner : parseInt(Events[1].id_owner) 
               
             });
         
             expect(event.endDate).toBe(Events[1].endDate);
            });

            test("test du get it de la classe event",() => {
                const event = new Event( {
                 id : parseInt(Events[0].id),
                 name : Events[1].name,
                 maxPrice : parseInt(Events[1].maxPrice),
                 startDate : Events[1].startDate,
                 endDate : Events[1].endDate,
                 id_owner : parseInt(Events[1].id_owner) 
                   
                 });
             
                 expect(event.id_owner).toBe(parseInt(Events[1].id_owner));
                });
 




});

