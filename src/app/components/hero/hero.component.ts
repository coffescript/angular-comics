import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHero(params['id']);
    });
   }

  ngOnInit() {
  }

}
