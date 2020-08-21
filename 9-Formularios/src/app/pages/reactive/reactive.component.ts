import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {

    forma: FormGroup;
    
    constructor(private fb: FormBuilder) { 
        this.crearFormulario();
    }
  
    ngOnInit(): void { }

    crearFormulario() {
        this.forma = this.fb.group({
            nombre: ['Sebastian'], // [Valor defecto, Validacion sincrona, Validacion Asincrona]
            apellido: ['Aguirre'],
            correo: ['test@mail.com']
        });
    }

    guardar() {
        console.log(this.forma);
    }
}
