import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  // encapsulation: ViewEncapsulation.Emulated    // Comportement par défaut
  // encapsulation: ViewEncapsulation.None        // Enlever les attributs _ngContent-qiu-c57
  // encapsulation: ViewEncapsulation.ShadowDom   // Fichier global CSS ne s'applique pas par défaut.
})
export class InputComponent implements OnInit {

  public fruit : string = '';
  public fruits : string[] = [];

  // Exemple Input :
  public addFruit(){
    this.fruits.push(this.fruit)    // Ajout du fruit dans le tableau de Fruits
    this.fruit = '';                // Réinitialisation du input à vide.
    console.log(this.fruits);
  }


  // 36. Référence Locale
  public addFruit2(reference : HTMLInputElement){
    console.log(reference.value);
    this.fruits.push(reference.value);
    reference.value = '';
  }

  public deleteFruit(fruit: string){
    this.fruits = this.fruits.filter((f) => f !== fruit);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
