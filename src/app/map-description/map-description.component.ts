import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from "../data.service";
import { DetailsOverlayComponent } from "../details-overlay/details-overlay.component";
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { markers } from '../markers';

@Component({
  selector: 'app-map-description',
  templateUrl: './map-description.component.html',
  styleUrls: ['./map-description.component.css']
})
export class MapDescriptionComponent implements OnInit {

  cards: Array<any> = [];
  currentCard: any = {};
  currentIndex: number = 0;
  @Input() markerListener: Subject<any>;
  markersData = markers;


  constructor(public router: Router, private dataService: DataService, public materialDialog: MatDialog) {}

  ngOnInit() {
    this.cards = this.markersData.map(m => m);
    this.currentCard = this.cards[0];
    
    this.markerListener.subscribe(e => {
      console.log(e);
      this.currentCard = e;
    })

  }

  nextCard(): void {
    if(this.currentIndex < this.cards.length-1){
      this.currentIndex++;
      this.currentCard = this.cards[this.currentIndex];
    }
  }

  prevCard(): void {
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.currentCard = this.cards[this.currentIndex];
    }
  }

  openDetailsOverlay(): void {
    let dialogRef = this.materialDialog.open(DetailsOverlayComponent, {
      width: '100%',
      height: '100%',
      data: this.currentCard
    });

    dialogRef.afterClosed().subscribe(res => console.log(res));
  }
}
