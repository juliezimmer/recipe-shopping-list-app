import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
   // the selector defines how the directive is added. 
   // This will be an attribute directive, so the selector must be enclosed in [].
   // remember, the selector must be a unique name.
   selector: '[appDropdown]'
})
export class DropdownDirective {
   // setting isOpen to false closes the dropdown
   // To dynamically attach or detach a CSS class depending on the 'isOpen status, @HostBinding is added. It allows binding to properties of elements the directive is placed on. 
   // This @HostBinding will bind to the class property. class is an array of all the classes, so, '.open', which identifies the open class, must be added.  It specifically identifies the 'open' class of the element. 
   // When 'isOpen = false, the directive is not attached. When it is true, the directive is attached. 
   @HostBinding('class.open') isOpen = false;
   
   @HostListener('click') toggleOpen() {
      // this is the opposite of: isOpen = false;  which opens the dropdown. Since isOpen = false closes the dropdown, !this.isOpen is NOT isOpen or NOT closed, so OPEN. 
      this.isOpen = !this.isOpen;
   }
   constructor(){

   }


} 