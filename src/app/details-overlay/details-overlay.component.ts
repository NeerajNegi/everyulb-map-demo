import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 

@Component({
  selector: 'app-details-overlay',
  templateUrl: './details-overlay.component.html',
  styleUrls: ['./details-overlay.component.css']
})
export class DetailsOverlayComponent implements OnInit {

  // displayModal: boolean = false;
  card: any = {};
  textContainerDisplay: string = 'block';
  gridTemplateValue: string = '1fr 1fr';

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<DetailsOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      console.log(data);
      this.card = data;
    }

  ngOnInit() {
  }

  hideDetails(): void {
    this.dialogRef.close('done');
  }

  toggleFullScreenImage(): void {
    console.log('toggle fullscreen image');
    if(this.textContainerDisplay === 'block') {
      this.textContainerDisplay = 'none';
      this.gridTemplateValue = '1fr';
    } else {
      this.textContainerDisplay = 'block';
      this.gridTemplateValue = '1fr 1fr';
    }
  }

}
