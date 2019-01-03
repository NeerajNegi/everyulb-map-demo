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

}
