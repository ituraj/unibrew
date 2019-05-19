import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MainFormService } from 'src/app/shared/main-form.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
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

  constructor(
    private formBuilder: FormBuilder,
    public service: MainFormService,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          formTypeFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          glassesFormCtrl: ['', Validators.required],
          headphonesFormCtrl: ['', Validators.required],
          helmetFormCtrl: ['', Validators.required],
          maskFormCtrl: ['', Validators.required],
          bootsFormCtrl: ['', Validators.required],
          vestFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          truckInspectionFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          fullNameFormCtrl: ['', Validators.required],
          companyNameFormCtrl: ['', Validators.required],
          transportationNumberFormCtrl: ['', Validators.required],
          trailerNumberFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          arrivalDepartureFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          arrivalTypeFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          sodasPalletFormCtrl: ['', Validators.required],
          beerPalletFormCtrl: ['', Validators.required],
          kegsPalletFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          departureFormCtrl: ['', Validators.required]
        }),
        this.formBuilder.group({
          printFormCtrl: ['', Validators.required]
        })
      ])
    });

    this.safetyFormGroup = this.formBuilder.group({
      glassesFormCtrl: ['', Validators.required],
      headphonesFormCtrl: ['', Validators.required]
    });
    this.trackingNumbersFormGroup = this.formBuilder.group({
      fullNameFormCtrl: ['', Validators.required],
      transportationNumberFormCtrl: ['', Validators.required],
      trailerNumberFormCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    let data = Object.assign({}, this.formGroup.value);
    let currentDate = new Date();
    const timestamp = currentDate.getTime();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const dateString = date + '/' + (month + 1) + '/' + year;
    if (this.formGroup.value.id == null) {
      this.firestore
        .collection('main-form')
        .add({ data, dateString, timestamp });
    } else {
      this.firestore
        .doc('main-form/' + this.formGroup.value.id)
        .update({ data });
    }
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
}
