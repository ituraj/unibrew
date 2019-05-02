import { Injectable } from '@angular/core';
import { Driver } from './driver.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  formData: Driver;

  constructor(private firestore: AngularFirestore) {}
  getDrivers() {
    return this.firestore.collection('drivers').snapshotChanges();
  }
}
