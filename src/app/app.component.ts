import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentRoute: string = 'summary';

  constructor() {}

  ngOnInit() {

  }

  scroll($el, route:string) {
    console.log($el);
    $el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.currentRoute = route;
  }
    
}
