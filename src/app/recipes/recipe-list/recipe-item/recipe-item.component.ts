import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   // there won't be a value assined ro recipe because it comes from outside this component. This also requires the @Input Decorator. @Input allows this component property (recipe) from outside the component.
   @Input() recipe: Recipe;
   
   // new Event Emitted
   @Output() recipeSelected = new EventEmitter <void> ();   
   constructor() { }

   ngOnInit() {
   }

   onSelected(){
      this.recipeSelected.emit();
   }
}
