import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() displayBasic: boolean = false;
  @Input() data: any;
  @Input() dialogMode: string = "add";
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() submit : EventEmitter<any>= new EventEmitter();
  formAdd: FormGroup;
  constructor(private fb:FormBuilder){
    this.formAdd = this.fb.group({
      author :[null, [Validators.required]],
      title :[null, [Validators.required]],
      id:[null, [Validators.required]]
    })
  }
  ngOnInit() {
    this.formAdd.patchValue(this.data);
  }
  save(){
    this.displayBasic=false;
    this.submit.emit(this.formAdd.value)
  }
  cancel(){
    console.log(this.data);
    this.formAdd.patchValue(this.data);
    console.log(this.formAdd.value);
  }
  closeDialog(){
    this.close.emit()
  }
}
