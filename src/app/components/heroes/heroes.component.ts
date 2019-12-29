import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { HeroesService, Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroService: HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  showHero( idx: number ) {
    this.router.navigate( ['/hero', idx] );
  }

}
