import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre = 'sebastián';
    nombre2 = 'sEbAstiáN nicOLáS AguiRRe';
    arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    PI = Math.PI;
    porcentaje = 0.234;
    salario = 1234.5;
    fecha = new Date();
    idioma = 'es';
    videoUrl = 'https://www.youtube.com/embed/tLOl3s0uIM4';
    activar = true;

    valorPromesa = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Listo el pollo')
        }, 4500)
    });

    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        direccion: {
            calle: 'Calle falsa',
            numero: 123
        }
    }
}
