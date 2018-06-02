import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   loadedLink = 'recipe';
   
   // from app template
   onNavigate(link: string){
      this.loadedLink = link;

   }

}
