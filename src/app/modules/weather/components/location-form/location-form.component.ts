import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  @Output() addLocation: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.createForm()
  }

  ngOnInit(): void {
  }

  onAddLocation(){
    const zipcode: string = this.form.get('zipcode').value
    this.addLocation.emit(zipcode)
    this.form.reset({}, {emitEvent: false})
  }

  private createForm(){
    return this.fb.group({
      zipcode: ['', Validators.required]
    })
  }

}
