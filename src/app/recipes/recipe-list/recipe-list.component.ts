import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   // left undefined initially
   recipes: Recipe[];  
   
   // the RecipeService is injected in the constructor as a parameter. The type, RecipeService, refers to the RecipeService class.  
   constructor(private recipeService: RecipeService) { }

   ngOnInit() {
      // this provides a copy of the recipes array from the recipe.service.ts file by calling the getRecipe method. 
      this.recipes = this.recipeService.getRecipes();
   }
}
