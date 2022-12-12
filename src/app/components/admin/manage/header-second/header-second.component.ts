import { Component, OnInit } from '@angular/core';
import { EvenBusService } from 'src/services/even-bus.service';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrls: ['./header-second.component.css']
})
export class HeaderSecondComponent implements OnInit {
  name : string = '123'
  title : string = ''
  constructor(private evenBusService: EvenBusService) { }

  ngOnInit() {
    this.evenBusService.currentName.subscribe(val=>{
      this.name = val.author;
      this.title= val.title
    })
  }

}
