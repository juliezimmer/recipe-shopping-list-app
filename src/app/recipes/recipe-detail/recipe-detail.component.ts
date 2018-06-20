import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   @Input() recipe: Recipe;
   
   constructor(private recipeService: RecipeService) { }

   ngOnInit() {
   }

   // When this method is called, the recipe ingredients are passed to the RecipeService.
   onAddToShoppingList(){
      // tbhis.recipe.ingredients represents the ingredients of the recipe the user wants to add to the shopping list. 
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
   }

}
