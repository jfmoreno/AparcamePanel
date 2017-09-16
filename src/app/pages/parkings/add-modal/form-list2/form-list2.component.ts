import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'form-list2',
  templateUrl: 'form-list2.html',
  styleUrls: [('./form-list2.scss')],

})
export class FormList2Component {
  name: string;
  coordenadasForm: FormGroup;

  
  ngOnInit() {
    this.coordenadasForm = this.fb.group({
      longitudes: this.fb.array([new FormControl()]),
      latitudes: this.fb.array([new FormControl()]),
    });
  }
  
  submit(value) {
    console.log(value);
  }
  
  constructor(private fb: FormBuilder) {}

  addNumber() {
    const longitudes = <FormArray>this.coordenadasForm.controls['longitudes'];
    const latitudes = <FormArray>this.coordenadasForm.controls['latitudes'];
    longitudes.push(new FormControl());
    latitudes.push(new FormControl());
  }




}


