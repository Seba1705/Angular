import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/hereos.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor(private heroesServices: HeroesService) { }

    heroes: HeroeModel[] = [];

    ngOnInit(): void {
        this.heroesServices.getHeroes()
            .subscribe(resp => this.heroes = resp);
    }


}
