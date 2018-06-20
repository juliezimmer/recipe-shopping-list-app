import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
   selector: 'app-recipes',
   templateUrl: './recipes.component.html',
   styleUrls: ['./recipes.component.css'],
   providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
   selectedRecipe: Recipe;
   
   // recipe service is injected using the constructor
   constructor(private recipeService: RecipeService) { }

   ngOnInit() {
      // listener for when a recipe is selected in the DOM.
      // .subscribe informs of any changes or clicks
      this.recipeService.recipeSelected
      .subscribe(
         // when a recipe is selected, data, of type Recipe, if received because that is how the EventEmitter was configured in recipe.service.ts.  
         (recipe: Recipe) => {
            // sets this.selectedRecipe equal to the recipe that was received with the event. 
            this.selectedRecipe = recipe;
         }
      );
   }

}
