import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails : Cocktail[] = [
    {
      name : 'Mojito',
      img : 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
      description: 'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.'
    },
    {
      name : 'Caipirinha',
      img : 'https://www.hangoverweekends.co.uk/uploads/images/caipirinha-cocktail.jpg',
      description : 'Originally based on a remedy to cure Spanish flu, the national drink of Brazil is made with cachaca (spirit from a sugar cane) or white rum/vodka, brown sugar and lime juice.'
    },
    {
      name : 'Pina Colada',
      img : 'https://www.hangoverweekends.co.uk/uploads/images/pina_colada_cocktail.jpg',
      description : 'The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
