import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() displayBasic: boolean = false;
  @Input() dialogMode: string = "add";
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  closeDialog(){
    this.close.emit()
  }

}
