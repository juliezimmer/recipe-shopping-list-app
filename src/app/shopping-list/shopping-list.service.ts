import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   ingredientsChanged = new EventEmitter<Ingredient[]>(); 

   private ingredients: Ingredient[] = [
      // instantiates a new Ingredient class via the construtor. 
      new Ingredient ('potatoes', 25),
      new Ingredient ('flour', 10),
   ];

   getIngredients(){
      // this retreives an exact copy of the ingredients array 
      return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      // when the array of ingredients has been changed ingredientsChanged is called with .emit() to emite a new Event. The value passed to the method is the original ingredients array called using the slice method to get an exact copy of the array. This ensures that the ingredients are always up to date and reflect any changes that may have been made to the ingredient list. 
      this.ingredientsChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]){
      // uses the spread operator to turn an array into a list, so the ingredients are pushed onto a list of ingredients.
      this.ingredients.push(...ingredients);
      // emit the changed ingredients by passing an exact copy of the array 
      this.ingredientsChanged.emit(this.ingredients.slice());
   }
}
