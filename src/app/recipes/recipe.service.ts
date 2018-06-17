import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
      // creating a new Recipe by instantiating the Recipe class and using the 'new' keyword.
      new Recipe ('Lefse','A soft grilled thinly rolled tortilla made with potatoes','http://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/05/lefse-main.jpg') 
   ];

   getRecipes() {
      // using the slice method without any arguments passed in on this.recipes returns a new array that is an exact copy of the one in this class.  
      return this.recipes.slice();
   }
}