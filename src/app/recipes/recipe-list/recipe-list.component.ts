import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
   constructor(private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute ) { }

   ngOnInit() {
      // this provides a copy of the recipes array from the recipe.service.ts file by calling the getRecipe method. 
      this.recipes = this.recipeService.getRecipes();
   }

   // click listener on New Recipe button in recipe-list.component.html. 
   // In order to navigate to this route, the router will have to be injected in the class constructor. 
   onNewRecipe(){
      // The current path is already '/recipes', being in the recipes-list component. 
      // Using the router navigate method, target  the desired path. To use a relative path in the navigate method, ActivatedRoute is required in the class constructor to inform the router of the current route. 
      this.router.navigate(['new'], {relativeTo: this.route });
    }
}
