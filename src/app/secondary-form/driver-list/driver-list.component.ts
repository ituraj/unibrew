import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/shared/driver.service';
import { Driver } from 'src/app/shared/driver.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  list: Driver[];
  constructor(
    private service: DriverService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  // This function will return an object from the firestore database with assigned id:
  ngOnInit() {
    this.service.getDrivers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Driver;
      });
    });
  }

  onEdit(driver: Driver) {
    this.service.formData = Object.assign({}, driver);
  }

  onDelete(id: string) {
    if (confirm('Would you like to delete this item?')) {
      this.firestore.doc('drivers/' + id).delete();
      this.toastr.warning('Item Deleted!', 'Drivers Register');
    }
  }
}
