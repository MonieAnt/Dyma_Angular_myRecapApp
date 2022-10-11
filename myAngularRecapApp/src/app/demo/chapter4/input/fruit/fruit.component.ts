import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input() fruit : string = ''

  // Création de l'EventEmitter :
  // dans attribut du composant Fruit
  // il s'ajoute auto dans l'import via Angular Core
  // nom : EventEmitter<typeInfoTransmise> = new EventEmitter()  pour assigner EventEmitter ==> Instance emit
  
  @Output() deleteF : EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  deleteFruit(){
    this.deleteF.emit(this.fruit);
  }

}
