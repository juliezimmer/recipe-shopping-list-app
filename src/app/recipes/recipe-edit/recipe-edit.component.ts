import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
   selector: 'app-recipe-edit',
   templateUrl: './recipe-edit.component.html',
   styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id: number;

   // tells whether the user is creating a new recipe or editing an existing recipe:
   editMode = false; // false means that the user is creating a new recipe.

   // inject the ActivatedRoute
   constructor(private route: ActivatedRoute) { }

   // Use the ngOnInit lifecycle hook to retrieve the id parameter.
   // This is done dynamically using the this.route.params observable
   ngOnInit() {
      this.route.params.subscribe(
         (params: Params) => {
            this.id = +params['id'];
            // checked whenever the parameters change and a new value is assigned to editMode.
            // This checks whether params has an id property. If it has an id, it will be a string with the id. Otherwise, it will be undefined.
            this.editMode = params['id'] != null;
            console.log(this.editMode); // will be true or false

         }
      )
   }  

}
