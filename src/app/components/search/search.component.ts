import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  endpoint: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['endpoint']);
      this.endpoint = params['endpoint'];
      this.heroes = this.heroesService.searchHeroes(params['endpoint']);
      console.log(this.heroes);
    });
  }

  showHero( idx: number ) {
    this.router.navigate( ['/hero', idx] );
  }

}
