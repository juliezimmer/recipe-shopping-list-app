import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
   // the route: ActivatedRoute is injected in the constructor for access to the recipe id. 
   constructor(private recipeService: RecipeService,
               private route: ActivatedRoute,
               private router: Router) { }

   ngOnInit() {
      // to get the id, use the route params observable and subscribe to it. This allows the code to subscribe to any changes in the route params.
      this.route.params.subscribe(
         (params: Params) => {
            this.id = +params ['id']; // '+' converts the id string into a number.
            // fetch the recipe using the RecipeService
            this.recipe = this.recipeService.getRecipe(this.id);
         }
      );

   }
   // When this method is called, the recipe ingredients are passed to the RecipeService.
   onAddToShoppingList(){
      // tbhis.recipe.ingredients represents the ingredients of the recipe the user wants to add to the shopping list. 
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
   }

   onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route});
      // an alternative wat to do this constructs a deliberate and specific path:
      this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
   }

}
