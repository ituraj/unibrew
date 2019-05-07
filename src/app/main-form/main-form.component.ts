import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  formGroup: FormGroup;

  safetyFormGroup: FormGroup;
  trackingNumbersFormGroup: FormGroup;
  arrivalDepartureFormCtrl: FormGroup;

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          glassesFormCtrl: ['', Validators.required],
          headphonesFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          transportationNumberFormCtrl: ['', Validators.required],
          trailerNumberFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          arrivalDepartureFormCtrl: ['', Validators.required]
        })
      ])
    });

    this.safetyFormGroup = this.formBuilder.group({
      glassesFormCtrl: ['', Validators.required],
      headphonesFormCtrl: ['', Validators.required]
    });
    this.trackingNumbersFormGroup = this.formBuilder.group({
      transportationNumberFormCtrl: ['', Validators.required],
      trailerNumberFormCtrl: ['', Validators.required]
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formGroup.value);
  }
}
