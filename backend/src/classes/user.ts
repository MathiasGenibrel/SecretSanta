import { addUser, getByEmail } from "../model/user"

export class User {
    #email:string
    #mdp:string
    #pseudo:string

    constructor(email:string,mdp:string,pseudo:string){
        this.#email = email
        this.#mdp = mdp
        this.#pseudo = pseudo
    }

    get Email() {
        return this.#email
    }

    get pseudo() {
        return this.#pseudo
    }

    create(){
        if(this.isValid()){
            addUser(this.#email,this.#mdp,this.#pseudo)
        }
    }

    isValid(){
        let erreurs:string[]

        if(!this.mailIsValid(this.#email)){
            erreurs = ["Email not good"]
        }
        return this.mailIsValid(this.#email)
    }
    mailIsValid(email:string){
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,}');
        let check = false;
        if(regex.test(email)){
            check = true;
        }
        return check
    }

}