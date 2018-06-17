import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[];  
   
   constructor(private recipeService: RecipeService) { }

   ngOnInit() {
      // this provides a copy of the recipes array from the recipe.service.ts file. 
      this.recipes = this.recipeService.getRecipes();
   }
}
