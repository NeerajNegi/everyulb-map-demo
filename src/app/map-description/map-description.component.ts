import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from "../data.service";
import { DetailsOverlayComponent } from "../details-overlay/details-overlay.component";
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';

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


  constructor(public router: Router, private dataService: DataService, public materialDialog: MatDialog) {}

  ngOnInit() {
    this.cards.push({
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. 
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      link: '',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    })
    this.cards.push({
      description: `Salmonella infection dogs peels placholder `,
      link: '',
      imageUrl: 'https://www.petmd.com/sites/default/files/salmonella-infection-dogs.jpg'
    })
    this.cards.push({
      description: `peels placholder peels placholder peels placholder peels placholder almonella infection dogs`,
      link: '',
      imageUrl: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })
    this.currentCard = this.cards[0];
    
    this.markerListener.subscribe(e => {
      console.log(e);
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
