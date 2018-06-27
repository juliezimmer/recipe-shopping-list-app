import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
   // the path that is reached when the app is loaded for the first time
   { path:'', redirectTo: '/recipes', pathMatch: 'full'},
   { path: 'recipes', component: RecipesComponent },
   { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   // exports the configured Router
   exports: [RouterModule]
}) 
export class AppRoutingModule {}