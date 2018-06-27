import { EventEmitter, Injectable } from '@angular/core';

// the Recipe Model 
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
   // this is an object that is instantiated by using EventEmitter.
   // The EventEmitter will hold some Recipe data.
   // The type, Recipe, is the Recipe model.
   recipeSelected = new EventEmitter<Recipe>();
   
   // this WAS in recipe-list.components.ts in the RecipeListComponent class before the recipe service was added.  This represents all of the recipes in the book and is an array of recipes. 
   // The recipes array is made private so that is can't be directly accssed from the outside. 
   private recipes: Recipe[] = [
     
      // 'new Recipe' creates a new recipe by instantiating the RecipeService class and using the 'new' keyword.
      new Recipe (
         'Lefse',
         'A soft grilled thinly rolled tortilla made with potatoes','http://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/05/lefse-main.jpg',
         // use the new Ingredient constructor to add ingredients to the recipe
         [
            new Ingredient('flour', 10),
            new Ingredient ('potatoes', 50),
            new Ingredient ('salt', 3)
         ]) 
   ];

   constructor(private slService: ShoppingListService) { }

   // This method returns the array so that it can be accessed from the outside.  
   getRecipes() {
      // using the slice method without any arguments passed in on this.recipes returns a new array that is an exact copy of the one in this class.  
      return this.recipes.slice();
   }

   // loads a single recipe by id
   getRecipe(index: number) {
      return this.recipes[index];
   }

   // this is called in the recipe-detail.component.ts file in the onAddToSHoppingList() method.
   addIngredientsToShoppingList(ingredients: Ingredient[]){
      // passes the ingredients to the ShoppingListService
      this.slService.addIngredients(ingredients);
   }
}