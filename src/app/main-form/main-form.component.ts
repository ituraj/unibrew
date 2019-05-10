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
  safetyItems = [
    {
      name: 'Safety Glasses',
      formControlName: 'glassesFormCtrl',
      img: '../../assets/svg/glasses.svg'
    },

    {
      name: 'Headphones',
      formControlName: 'headphonesFormCtrl',
      img: '../../assets/svg/headphones.svg'
    },

    {
      name: 'Helmet',
      formControlName: 'helmetFormCtrl',
      img: '../../assets/svg/helmet.svg'
    },

    {
      name: 'Face Mask',
      formControlName: 'maskFormCtrl',
      img: '../../assets/svg/mask.svg'
    },

    {
      name: 'Safety boots',
      formControlName: 'bootsFormCtrl',
      img: '../../assets/svg/shoes.svg'
    },

    {
      name: 'Yellow Vest',
      formControlName: 'vestFormCtrl',
      img: '../../assets/svg/vest.svg'
    }
  ];

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
          headphonesFormCtrl: ['', Validators.required],
          helmetFormCtrl: ['', Validators.required],
          maskFormCtrl: ['', Validators.required],
          bootsFormCtrl: ['', Validators.required],
          vestFormCtrl: ['', Validators.required]
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
    console.log(this.formGroup.value);
  }
}
