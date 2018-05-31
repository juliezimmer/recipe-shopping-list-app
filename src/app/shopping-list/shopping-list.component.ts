import { Component, OnInit } from '@angular/core';

// imports the ingredient class that was created in the shared folder as the Ingredient model.
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
   ingredients: Ingredient[] = [
      // instantiates a new Ingredient class via the construtor. 
      new Ingredient ('potatoes', 25),
      new Ingredient ('flour', 10)
   ];
   
   constructor() { }

   ngOnInit() {
  }

}
