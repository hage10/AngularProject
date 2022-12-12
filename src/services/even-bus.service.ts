import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenBusService {

  private nameSource = new BehaviorSubject<any>("");
  currentName = this.nameSource.asObservable();

  constructor() { }

  change(name: any[]) {
    this.nameSource.next(name);
  }


}

