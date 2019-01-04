import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  yearDisplayValue: string = 'none';
  costDisplayValue: string = 'none';
  selectedYear: any = {};
  selectedCost: any = {};
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

  years: Array<any> = [
    {value: 4, viewValue: '4 Years'},
    {value: 3, viewValue: '3 Years'},
    {value: 2, viewValue: '2 Years'},
    {value: 1, viewValue: '1 Years'},
  ]

  costs: Array<any> = [
    {value: 'completeCost', viewValue: 'Complete Cost'},
    {value: 'villageCost', viewValue: 'Village Cost'},
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
    this.selectedYear = this.years[0];
    this.selectedCost = this.costs[0];
  }

  toggleDownloadButton(): void {
    this.showDownloadButton = !this.showDownloadButton;
  }
  
  toggleYearDropdown(): void {
    if(this.yearDisplayValue === 'none') {
      this.yearDisplayValue = 'block';
    } else {
      this.yearDisplayValue = 'none';
    }
  }

  toggleCostDropdown(): void {
    if(this.costDisplayValue === 'none') {
      this.costDisplayValue = 'block';
    } else {
      this.costDisplayValue = 'none';
    }
  }

  setYear(year: any): void {
    this.selectedYear = year;
    console.log(this.selectedYear);
    this.toggleYearDropdown();
  }

  setCost(cost: any): void {
    this.selectedCost = cost;
    console.log(this.selectedCost);
    this.toggleCostDropdown();
  }
}
