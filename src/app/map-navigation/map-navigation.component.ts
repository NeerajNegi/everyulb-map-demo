import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-navigation',
  templateUrl: './map-navigation.component.html',
  styleUrls: ['./map-navigation.component.css']
})
export class MapNavigationComponent implements OnInit {

  @Output() toggleScope = new EventEmitter();
  @Output() toggleIssues = new EventEmitter();
  @Output() toggleProposals = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleScopeButton(): void {
    this.toggleScope.emit();
  }

}
