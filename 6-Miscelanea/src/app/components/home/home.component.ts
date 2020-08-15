import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-sg-style></app-sg-style>
        <hr />
    
        <app-css></app-css>
        <hr />
    
        <app-clases></app-clases>
        <hr />
    
        <p [appResaltado]="'orange'">Hola Mundo</p>
        <hr />
    
        <app-ng-switch></app-ng-switch>
    `,
    styles: [],
})
export class HomeComponent implements OnInit {
    constructor() {}
  
    ngOnInit(): void {}
}
