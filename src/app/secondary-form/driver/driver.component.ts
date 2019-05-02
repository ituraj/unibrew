import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/shared/driver.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  constructor(
    private service: DriverService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      fullName: '',
      trailerNumber: '',
      mobile: ''
    };
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    // We delete id to be able to update the same object without changing id
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('drivers').add(data);
    } else {
      this.firestore.doc('drivers/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Submitted successfully!', 'Drivers Register');
  }
}
