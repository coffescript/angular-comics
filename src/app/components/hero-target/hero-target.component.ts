import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-target',
  templateUrl: './hero-target.component.html',
  styleUrls: ['./hero-target.component.css']
})
export class HeroTargetComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  showHero( idx: number ) {
    // this.router.navigate( ['/hero', this.index]);
    this.heroSelected.emit(this.index);
  }

}
