// The Component feature of Angular has to be imported from @angular/core
import { Component, EventEmitter, Output } from '@angular/core';

// This HeaderComponent class will not be recognized as a component by Angular without the @Component() decortor.
@Component({
   selector:'app-header',
   templateUrl: './header.component.html'
})
export class HeaderComponent {
   // event emitted when link is selected
   // this creates an event emitter based on the event emitter class.
   @Output () linkSelected = new EventEmitter <string> ();
   
   onSelect(link: string){
      //using the property that holds the event to emit an event whenever one of the links in the nav bar is clicked.
      this.linkSelected.emit(link);

   }
}
