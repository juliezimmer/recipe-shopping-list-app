import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   // ElementRef, @ViewChild, EventEmitter, and @Output need to be imported from @angular/core
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;

   // emit a new event where the nameInput and amountInput are passed to the parent component, which is the shoppingList component, which manages the list of ingredients.
   // 'ingredientAdded' is in shopping-list.component.html as an event: <app-shopping-edit (ingredientAdded)="onIngredientAdded($event)"> </app-shopping-edit>
   @Output() ingredientAdded = new EventEmitter <Ingredient>();
   
   constructor() { }

   ngOnInit() {
   }

   onAddItem(){
      // create a new Ingredient passing the name and amount InputRef.nativeElement.value
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      
      // emit the event and pass newIngredient as data
      this.ingredientAdded.emit(newIngredient)
   }

}
