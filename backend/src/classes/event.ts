import { IEventConfig } from "../interfaces/event";
import { addEvent, getEventById, modifEvent, suppEvent} from "../model/event";


export class Event {

    #id? : number;
    #name: string ;
    #maxPrice : number;
    #startDate : string;
    #endDate : string;
    #id_owner : number;
    static addEvent: any;
    constructor (data : IEventConfig ) {

        this. #id = data.id
        this.#name = data.name
        this.#maxPrice = data.maxPrice
        this.#startDate = data.startDate
        this.#endDate = data.endDate
        this.#id_owner = data.id_owner

    }
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get maxPrice() {
        return this.#maxPrice
    }
    get startDate() {
        return this.#startDate
    }
    get endDate() {
        return this.#endDate
    }
    get id_owner() {
        return this.#id_owner
    }


    // On teste si le name est différent de null ou n'est pas vide et si le prix ne dépasse pas plus de 1000
    eventValid(){
        if(this.#name ){
            if((this.#maxPrice < 1000)) { 
                return;
            } else {
                throw "prix trop élevé";
            }
        }   else {
            throw "Nom invalide ou ne peux pas être null";
        }   
    }

    addEvent(){
        try {
            this.eventValid()
            addEvent(this.#name, this.#maxPrice, this.#startDate, this.#endDate, this.#id_owner)
        } catch (error) {
            throw error
        }
    }


    modifEvent(){
        try {
            this.eventValid()
            modifEvent(this.#name, this.#maxPrice, this.#id as any, this.#id_owner)
        } catch (error) {
            throw error
        }

    }


    async eventExist() {
        let eventValue = await getEventById(this.#id as any) as any 
        if (eventValue[0].nb === 1) {
            return true
        } else {
            return false
        }
    }

    suppEvent (){
        try {
            this.eventExist()
            suppEvent(this.#id as any)
        } catch(error) {
            throw error
        }
    }
    
}



export default addEvent
