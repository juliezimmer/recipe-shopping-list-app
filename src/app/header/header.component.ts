// The Component feature of Angular has to be imported from @angular/core
import { Component } from '@angular/core';

// This HeaderComponent class will not be recognized as a component by Angular without the @Component() decortor.
@Component({
   selector:'app-header',
   templateUrl: './header.component.html'
})
export class HeaderComponent {

}
