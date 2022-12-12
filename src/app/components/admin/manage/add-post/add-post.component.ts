import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenBusService } from 'src/services/even-bus.service';

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
  @Output() submit: EventEmitter<any> = new EventEmitter();
  formAdd: FormGroup;
  constructor(private fb: FormBuilder, private evenBusService: EvenBusService) {
    this.formAdd = this.fb.group({
      author: [null, [Validators.required]],
      title: [null, [Validators.required]],
      id: [null]
    })
  }
  ngOnInit() {
    this.formAdd.patchValue(this.data);
  }
  save() {
    (<any>Object).values(this.formAdd.controls).forEach((control : any) : any => {
      control.markAsDirty();
    });
    if (this.formAdd.valid) {
      this.displayBasic = false;
      this.submit.emit(this.formAdd.value)

      this.evenBusService.change(this.formAdd.value);
    }else{
      console.log(this.formAdd.controls['author'].dirty);
    }
  }
  get f() { return this.formAdd.controls; }
  cancel() {
    this.displayBasic = false;
  }
  closeDialog() {
    this.close.emit()
  }
}
