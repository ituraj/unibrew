import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  emailid;
  formdata;
  constructor() {}

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*'),
          Validators.minLength(3)
        ])
      ),
      passwordFormCtrl: new FormControl('', this.validation)
    });
  }
  validation(formcontrol) {
    if (formcontrol.value.length < 3) {
      return { passwordFormCtr: true };
    }
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }
}
