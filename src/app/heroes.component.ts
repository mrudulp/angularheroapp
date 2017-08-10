import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent  implements OnInit{
  ngOnInit(): void{
    this.getHeroes();
  }
  name = 'Angular';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

  constructor(
    private router:Router,
    private heroService: HeroService
  ){}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
