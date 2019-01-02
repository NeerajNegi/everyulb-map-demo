import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  currentRoute: string = '';

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    router.events.subscribe((res) => {
      if(res instanceof NavigationEnd){
        this.currentRoute = this.router.url.slice(1);
      }
    })
  }

  ngOnInit() {
  }
  
}
