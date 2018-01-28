import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this.heroService.getHero(params.id);
    });
  }

}
