import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Injectable()
export class HeroService {

  private heroes: Hero[] = [
    {
      nombre: 'Aquaman',
      bio: 'The most recognized power of Aquaman is the telepathic ability to communicate with marine life, which can reach great distances.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa:'DC'
    },
    {
      nombre: 'Batman',
      bio: 'The main features of Batman are summarized in "physical dexterity, deductive skills and obsession." Most of the basic characteristics of the comics have varied due to the different interpretations they have given to the character.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa:'DC'
    },
    {
      nombre: 'Daredevil',
      bio: 'Having lost sight, the remaining four senses of Daredevil were increased by radiation to superhuman levels, in the accident he had as a child. Despite its blindness, he can \'see\' through a \'sixth sense\' that serves as a radar similar to that of bats.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: 'Its main power is its ability to increase its strength to practically unlimited levels while increasing its fury. Depending on which Hulk personality is in charge at that moment (the Hulk Banner is the weakest, but it makes up for it with its intelligence).',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa:'Marvel'
    },
    {
      nombre: 'Green Lantern',
      bio: 'Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fed by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a manufacturer of lamps called Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Spider-Man',
      bio: 'After being bitten by a radioactive spider, he obtained the following superhuman powers, a great strength, agility, to be able to climb walls. The strength of Spider-Man allows him to lift 10 tons or more. Thanks to this great force Spider-Man can perform incredible jumps.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: 'In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, however deadly it may be, and that same power makes it immune to any disease on Earth and some extraterrestrials. He also possesses a superhuman strength, that although it does not compare with the one of other superheroes like Hulk, surpasses the one of any human.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    }
  ];

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
