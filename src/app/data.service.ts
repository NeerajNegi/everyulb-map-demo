import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  
  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    console.log("Service: ",data);
    this.dataSource.next(data);
  }

}
