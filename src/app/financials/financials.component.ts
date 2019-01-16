import { Component, OnInit } from '@angular/core';
// import {chartJson} from '../shared/models/chartJson.model'

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  firstChartLabel = ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"];
  secondChartLabel = ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"];
  breadcrums:any = ["home"];
  newData : any = {
    "first_year": {
      "Chatrapur": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [1007684,947000,26000,34000,238000,438000,60000,397996],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [517290,357239,80000,53155,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [472000,80000,325000,50000,20000,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [24000,0,0,10000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [108000,40000,90000]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,90000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [115000,180000,102996]
        }
      },
      "Jainagar": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [258645,1264000,26000,34000,238000,438000,60000,295000],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [258645,0,0,0,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [472000,357000,60000,325000,50000,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [24000,0,0,10000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [108000,40000,90000]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,90000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [115000,180000,102996]
        }
      }
    },
    "second_year": {
      "Chatrapur": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [0,0,26000,206000,108000,468000,60000,102996],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [0,0,0,0,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [0,0,0,0,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [0,12600,0,8000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [108000,0,0]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,90000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [0,0,102996]
        }
      },
      "Jainagar": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [0,0,26000,33200,108000,468000,60000,102996],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [0,0,0,0,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [0,0,0,0,0,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [0,25200,0,8000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [108000,0,0]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,90000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [0,0,102996]
        }
      }
    },
    "third_year": {
      "Chatrapur": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [0,0,26000,14615,118800,4680000,60000,0],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [0,0,0,0,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [0,0,0,0,0,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [0,0,6615,8000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [118800,0,0]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,120000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [0,0,0]
        }

      },
      "Jainagar": {
        "projectName": ["Liquid waste treatment","Solid waste Management","Monitoring","Information Education Communication","Human Resource","Operation and maintainance  for SWM","Administrative expenditure", "Project monitoring and site assessments"],
        "projectAmount": [0,0,26000,21230,118800,4680000,60000,0],
        "Liquid waste treatment": {
          "projectNames": ["Soak Pit","Community Septic Tank with dispersion trench","Bio gas plant 6- 8 cubic meter","Toilet with Two pit for aganwadi","plantation of tree  AL Team"],
          "projectAmount": [0,0,0,0,0]
        },
        "Solid waste Management": {
          "projectNames": ["Compost Shed with aerated compost Pit", "Primary Storage dustbin", "Secondary collection dustbins road side", "Collection and Transportation", "Plastic Shreading machine", "Cleaning of dumping site + other legacy waste"],
          "projectAmount": [0,0,0,0,0,0]
        },
        "Monitoring": {
          "projectNames": ["Waste Quality monitoring Quarterly"],
          "projectAmount": [26000]
        },
        "Information Education Communication": {
          "projectNames": ["First Year", "Second Year", "Third Year", "Cleanliness drive"],
          "projectAmount": [0,0,13230,8000]
        },
        "Human Resource": {
          "projectNames": ["Superviser", "Technical Specialist", "Social Specialist"],
          "projectAmount": [118800,0,0]
        },
        "Operation and maintainance  for SWM": {
          "projectNames": ["Driver(1)", "Paryavaran Mitra(4)","Operations + diesel + bioculture + misc"],
          "projectAmount": [84000,264000,90000]
        },
        "Administrative expenditure": {
          "projectNames": ["Office and other expenditure of NGO"],
          "projectAmount": [60000]
        },
        "Project monitoring and site assessments" : {
          "projectNames": ["Project Design", "Project site implementation", "Impact Assessment Dashboard"],
          "projectAmount": [0,0,0]
        }
      }
    }
  }


  yearDisplayValue: string = 'none';
  costDisplayValue: string = 'none';
  selectedYear: any = {};
  selectedCost: any = {};
  showDownloadButton: boolean = false;
  breadcrum: string = 'Total';
  showChart2:boolean = false;
  // legendTitle: Array<string> = [
  //   'A. Liquid waste treatment',
  //   'B. Monitoring',
  //   'C. Solid waste Management',
  //   'D. Information Education Communication',
  //   'E. Humar Resource',
  //   'F. Administrative expenditure'
  // ];
  // legendTitle: Array <string> = Object.keys(this.chartJson.yearly_budget.first_year.Chatrapur);
  legendTitle: Array <string> = this.newData.first_year.Chatrapur.projectName;
  legendData: Array<number> = this.newData.first_year.Chatrapur.projectAmount;
  // legendData: Array<number> = [
  //   1663829.00,
  //   663829.00,
  //   2663829.00,
  //   1663829.00,
  //   63829.00,
  //   4663829.00
  // ]

  years: Array<any> = [
    {value: 'first_year', viewValue: '1 Year'},
    {value: 'second_year', viewValue: '2 Years'},
    {value: 'third_year', viewValue: '3 Years'},
  ]

  costs: Array<any> = [
    {value: 'completeCost', viewValue: 'Complete Cost'},
    {value: 'Chatrapur', viewValue: 'Chatrapur'},
    {value: 'Jainagar', viewValue: 'Jainagar'},
  ]

  constructor() { }

  pieChartLabels:string[] = this.newData.first_year.Chatrapur.projectName;
  pieChartData:number[] = this.newData.first_year.Chatrapur.projectAmount;
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
    this.showChart2 = true;
    console.log(e);
    // console.log(data);
    var label ;
      if (e.active[0]) {
        var chartData = e.active[0]['_chart'].config.data;
        var idx = e.active[0]['_index'];
        label = chartData.labels[idx];

      }
      this.breadcrum = label;
      // if(label == 'Liquid waste treatment'){
        
        e.active[0]['_chart'].config.data.labels = [];
        e.active[0]['_chart'].config.data.labels = this.newData.first_year.Chatrapur[label].projectNames;
        this.pieChartLabels = this.newData.first_year.Chatrapur[label].projectNames;
        this.pieChartData = this.newData.first_year.Chatrapur[label].projectAmount;
        console.log(this.pieChartLabels);  
        this.legendTitle = this.newData.first_year.Chatrapur[label].projectNames;
        this.legendData = this.newData.first_year.Chatrapur[label].projectAmount;
      // }
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
    console.log(this.selectedYear);
    if(this.yearDisplayValue === 'none') {
      this.yearDisplayValue = 'block';
    } else {
      this.yearDisplayValue = 'none';
    }
    this.chartFilter();
   
  }

  toggleCostDropdown(): void {
    if(this.costDisplayValue === 'none') {
      this.costDisplayValue = 'block';
    } else {
      this.costDisplayValue = 'none';
    }
    this.chartFilter();
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

  changeChartData(newChartData: any): void {
    console.log(newChartData);
  }
  callPieData() {
    this.showChart2 = false;
    this.breadcrum = "Total";
    this.pieChartLabels = this.firstChartLabel;
    this.pieChartData = this.newData.first_year.Chatrapur.projectAmount;
    this.legendTitle = this.newData.first_year.Chatrapur.projectName;
    this.legendData = this.newData.first_year.Chatrapur.projectAmount;
  }

  chartFilter() {
    if(this.selectedCost.value == 'Jainagar') {
      if (this.selectedYear.value == 'first_year') {
        console.log('jai 1');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.first_year.Jainagar.projectAmount;
          this.legendData = this.newData.first_year.Jainagar.projectAmount;
        } else {
          this.pieChartData = this.newData.first_year.Jainagar[this.breadcrum].projectAmount;
          this.legendData = this.newData.first_year.Jainagar[this.breadcrum].projectAmount;
        }
        
      } else if(this.selectedYear.value == 'second_year') {
        console.log('jai 2');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.second_year.Jainagar.projectAmount;
          this.legendData = this.newData.second_year.Jainagar.projectAmount;
        } else {
          this.pieChartData = this.newData.second_year.Jainagar[this.breadcrum].projectAmount;
          this.legendData = this.newData.second_year.Jainagar[this.breadcrum].projectAmount;
        }
      }  else if(this.selectedYear.value == 'third_year') {
        console.log('jai 3');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.third_year.Jainagar.projectAmount;
          this.legendData = this.newData.third_year.Jainagar.projectAmount;
        } else {
          this.pieChartData = this.newData.third_year.Jainagar[this.breadcrum].projectAmount;
          this.legendData = this.newData.third_year.Jainagar[this.breadcrum].projectAmount;
        }
      } 
    } else if (this.selectedCost.value == 'Chatrapur') {
      if (this.selectedYear.value == 'first_year') {
        console.log('chat 1');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.first_year.Chatrapur.projectAmount;
          this.legendData = this.newData.first_year.Chatrapur.projectAmount;
        } else {
          this.pieChartData = this.newData.first_year.Chatrapur[this.breadcrum].projectAmount;
          this.legendData = this.newData.first_year.Chatrapur[this.breadcrum].projectAmount;
        }
      } else if (this.selectedYear.value == 'second_year') {
        console.log('chat 1');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.second_year.Chatrapur.projectAmount;
          this.legendData = this.newData.second_year.Chatrapur.projectAmount;
        } else {
          this.pieChartData = this.newData.second_year.Chatrapur[this.breadcrum].projectAmount;
          this.legendData = this.newData.second_year.Chatrapur[this.breadcrum].projectAmount;
        }
      }  else if (this.selectedYear.value == 'third_year') {
        console.log('chat 1');
        if(this.breadcrum == 'Total') {
          this.pieChartData = this.newData.third_year.Chatrapur.projectAmount;
          this.legendData = this.newData.third_year.Chatrapur.projectAmount;
        } else {
          this.pieChartData = this.newData.third_year.Chatrapur[this.breadcrum].projectAmount;
          this.legendData = this.newData.third_year.Chatrapur[this.breadcrum].projectAmount;
        }
      }
    }
  }
}
