import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
   // the path that is reached when the app is loaded for the first time
   { path:'', redirectTo: '/recipes', pathMatch: 'full'},
   { 
      path: 'recipes', 
      component: RecipesComponent,
      children: [
         { path:'', component: RecipeStartComponent },
         { path: ':id', component: RecipeDetailComponent }
      ] 
   },
   { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   // exports the configured Router
   exports: [RouterModule]
}) 
export class AppRoutingModule {}