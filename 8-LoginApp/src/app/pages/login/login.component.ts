import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/app.models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    usuario: UsuarioModel = new UsuarioModel();
    constructor() { }
  
    ngOnInit() {
    }

    login (formulario: NgForm) {
        
        if(formulario.invalid)
            return;
        console.log(this.usuario);
    }

}
