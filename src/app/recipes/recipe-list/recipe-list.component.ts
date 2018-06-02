import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe> ();
   
   recipes: Recipe[] = [
      // creating a new Recipe by instantiating the Recipe class and using the 'new' keyword.
      new Recipe ('Lefse','A soft grilled thinly rolled tortilla made with potatoes','http://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/05/lefse-main.jpg') 
   ];
   constructor() { }

   ngOnInit() {
   
   }

   onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
   }

}
