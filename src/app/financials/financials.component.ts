import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  showDownloadButton: boolean = false;
  breadcrum: string = 'Total';
  legendTitle: Array<string> = [
    'A. Liquid waste treatment',
    'B. Monitoring',
    'C. Solid waste Management',
    'D. Information Education Communication',
    'E. Humar Resource',
    'F. Administrative expenditure'
  ];

  legendData: Array<number> = [
    1663829.00,
    663829.00,
    2663829.00,
    1663829.00,
    63829.00,
    4663829.00
  ]

  constructor() { }

  public pieChartLabels:string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  public pieChartData:number[] = [1663829, 2663829, 2663829,1663829,2163829,4663829];
  public pieChartType:string = 'pie';
  public pieChartColors: Array<any> = [{
    backgroundColor: [
      'rgba(204, 235, 197, 1)',
      'rgba(240, 249, 232, 1)',
      'rgba(8, 104, 172, 1)',
      'rgba(67, 162, 202, 1)',
      'rgba(123, 204, 196, 1)',
      'rgba(168, 221, 181, 1)'
    ]
  }
  ]
  public pieChartOptions: any = {
    scales: {
        yAxes: [{
            display: false,
            gridLines: {
                display: false,
            },
        }],
        xAxes: [{
            display: false,
            gridLines: {
                display: false,
            },
        }],
    },
    legend: {
        display: false
    }
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
  }

  toggleDownloadButton(): void {
    this.showDownloadButton = !this.showDownloadButton;
  }

}
