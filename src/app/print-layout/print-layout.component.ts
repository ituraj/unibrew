import { Component, OnInit } from '@angular/core';
import { MainFormService } from 'src/app/shared/main-form.service';
import { MainFormItem } from 'src/app/shared/main-form.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit {
  list: MainFormItem[];
  constructor(
    public service: MainFormService,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.service.getMainForm().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MainFormItem;
      });
    });
  }

  onEdit(item: MainFormItem) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(id: string) {
    if (confirm('Would you like to delete this item?')) {
      this.firestore.doc('main-form/' + id).delete();
    }
  }
}
