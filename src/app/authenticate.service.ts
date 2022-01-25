import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{
    constructor(){}

    authenticate(){
        localStorage.setItem('user', 'Sneha')
    }

    checkAuthentication(){
        return (localStorage.getItem('user')==='Sneha')
    }
}