import { Component } from '@angular/core';
import { Cocktail } from './demo/chapter3/interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularRecapApp';

  // Chapter 3 : Cocktail App
  cocktail: Cocktail  ={
    name : 'Mojito',
    img : 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
    description: 'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.'
  }
}
