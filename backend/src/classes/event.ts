import { addEvent, modifEvent} from "../model/event";

export class Event {


    #name: string ;
    #maxPrice : number;
    #startDate : string;
    #endDate : string;
    #id_owner : number;
    constructor ( name: string, maxPrice: number, startDate: string, endDate: string, id_owner: number) {

        this.#name = name
        this.#maxPrice = maxPrice
        this.#startDate = startDate
        this.#endDate = endDate
        this.#id_owner = id_owner

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

    eventValid(){
        let verif = false;
        if(!(this.#name == "" || this.#name == null)){
            if((this.#maxPrice < 1000)) {
                verif = true
            }
        }

        if(verif){ 
            addEvent(this.#name, this.#maxPrice, this.#startDate, this.#endDate, this.#id_owner)
        } else  {
            console.log("Nom invalide et prix trop haut !")
        }
    }


    // addEvent() {
    //     addEvent(this.#name, this.#maxPrice, this.#startDate, this.#endDate, this.#id_owner)
    // }

    

}
