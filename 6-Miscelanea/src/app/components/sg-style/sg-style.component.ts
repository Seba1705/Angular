import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sg-style',
    template: ` <p [style.fontSize.px]="tamanio">
                    Hola mundo... Esto es una etiqueta.
                </p>
                <button class="btn btn-primary m-2" (click)="tamanio = tamanio + 5">
                    <i class="fa fa-plus"></i>
                </button>
                <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
                    <i class="fa fa-minus"></i>
                </button> `,
    styles: [],
})
export class SgStyleComponent implements OnInit {

    tamanio: number = 5;
  
    constructor() {}
  
    ngOnInit(): void {}
}
