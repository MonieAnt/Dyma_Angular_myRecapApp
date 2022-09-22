import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // Exemple 1 : 2Ways Binding
  public content = "Type text here"

  // Exemple 2 : NgIf
  public displayButton = true

  // Exemple 3 : NgStyle
  public color = "green"

  // Exemple 4 : NgClass
  public color2 = ""

  // Exemple 5 : NgFor
  public users: Array<{ nom: string; }> = [];

  constructor() {

    this.users = [
      {nom : 'Antoine'},
      {nom : 'Guillaume'},
      {nom: 'Bastien'}
    ]

   }

  ngOnInit(): void {
  }

}
