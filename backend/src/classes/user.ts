import { addUser, getByEmail, suppUser } from "../model/user"

export class User {
    #id?:number
    #email:string
    #mdp:string
    #pseudo:string

    constructor(email:string,mdp:string,pseudo:string,id?:number ){
        this.#id = id
        this.#email = email
        this.#mdp = mdp
        this.#pseudo = pseudo
    }

    get Email() {
        return this.#email
    }

    get id() {
        return this.#id
    }

    get pseudo() {
        return this.#pseudo
    }

    // Creation d'un utilisateur.
    create(){
        // Vérification si les conditions pour créer un utilisateur est correct.
        if(this.isValid()){
            // Requete SQL qui ajoute un utilisateur dans la BDD.
            addUser(this.#email,this.#mdp,this.#pseudo)
            return true
        } else {
            return false
        }
    }

    // Fonction qui test si un utilisateur est valide.
    isValid(){
        let erreurs:string[]

        if(!this.mailIsValid(this.#email)){
            erreurs = ["Email not good"]
        }
        return this.mailIsValid(this.#email)
    }
    // Fonction qui retourne un boolean si l'émail est correct.
    mailIsValid(email:string){
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,}');
        let check = false;
        if(regex.test(email)){
            check = true;
        }
        return check
    }

    // Fonction qui nous informe si un compte à déjà un email existant.
    async isExist (){
        let emailValue = await getByEmail(this.#email) as any
        if ( emailValue[0].nb === 1 ) {
            return true
        } else {
            return false
        }
    }

    // Fonction qui supprime l'utilisateur
    suppUser(){
        suppUser(this.#id as any)
        return true
    }
}