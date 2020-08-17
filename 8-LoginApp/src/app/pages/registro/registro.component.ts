import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/app.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
    usuario: UsuarioModel = new UsuarioModel();

    constructor(private auth: AuthService) { }
  
    ngOnInit() { }

    onSubmit(formulario: NgForm) {
        if (formulario.invalid)
            return;
        
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(resp => {
                console.log(resp);
            })
    
    }
}
