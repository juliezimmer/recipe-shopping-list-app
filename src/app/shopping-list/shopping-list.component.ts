import { Component, OnInit } from '@angular/core';

// imports the ingredient class that was created in the shared folder as the Ingredient model.
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
   // this is an uninitialized property
   ingredients: Ingredient[]; 
   
   // inject ShoppingListService by binding it to a property, 'slService'
   constructor(private slService: ShoppingListService) { }

   ngOnInit() {
      // assigns ingredients to whatever is returned when getIngredients is called.
      this.ingredients = this.slService.getIngredients();

      // subscribe to the event emitter in the shoppingListService
      this.slService.ingredientsChanged
         .subscribe(
            (ingredients: Ingredient[]) => {
               this.ingredients = ingredients;
            }
         )
   }

   

}
