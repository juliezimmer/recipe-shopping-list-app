import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   // ElementRef, @ViewChild, EventEmitter, and @Output need to be imported from @angular/core
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;

   constructor(private slService: ShoppingListService) { }

   ngOnInit() {

   }

   onAddItem(){
      // create a new Ingredient passing the name and amount InputRef.nativeElement.value
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.slService.addIngredient(newIngredient);
      
      
   }

}
