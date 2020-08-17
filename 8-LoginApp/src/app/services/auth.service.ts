import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuarioModel } from '../models/app.models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    private apiKey = 'AIzaSyA4DAb5UCPOruuRvnDZrDYVR7UxaCKGoWs';
    // Crear Usuario
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


    // Login
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


    constructor(private http: HttpClient) { }
    
    nuevoUsuario (user: UsuarioModel) {
        // const authData = {
        //     email: user.email,
        //     password: user.password,
        //     returnSecureToken: true
        // };
        const authData = {
            ...user,
            returnSecureToken: true
        };

        return this.http.post(`${this.url}/signUp?key=${this.apiKey}`, authData);
    }

    login (user: UsuarioModel) {

    }

    logout (){

    }

}
