import { Component, OnInit, OnDestroy } from '@angular/core';

// imports the ingredient class that was created in the shared folder as the Ingredient model.
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
   // this is an uninitialized property
   ingredients: Ingredient[]; 

   // used to unsubscribe in ngOnInit
   private subscription: 
   Subscription;
   
   // inject ShoppingListService by binding it to a property, 'slService'
   constructor(private slService: ShoppingListService) { }

   ngOnInit() {
      // assigns ingredients to whatever is returned when getIngredients is called.
      this.ingredients = this.slService.getIngredients();
      this.subscription = this.slService.ingredientsChanged
         .subscribe(
            (ingredients: Ingredient[]) => {
               this.ingredients = ingredients;
            }
         )
   }

   // Angular won't handle the subscription to the Subject, so unsubscribe has to be added manually. 
   ngOnDestroy(){
      this.subscription.unsubscribe();
   }

   

}
