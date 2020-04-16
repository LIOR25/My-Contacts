import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import * as actions from '../../store/contact.actions';
import * as fromContact from "../../store/contact.reducer";
import { Observable } from 'rxjs';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

import { Contact } from "../../store/contact.reducer";

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements OnInit {
  displayedColumns = ["name", "city", "email", "actions"];

  contacts: Observable<any>;
  contacDoc: AngularFirestoreDocument<Contact>;

  constructor(
    private store: Store<fromContact.State>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.contacts = this.store.select(fromContact.selectAll);
    console.log(this.contacts);
    this.store.dispatch(new actions.Query());
  }

  updateContact(id, name, email, city) {
    this.store.dispatch(
      new actions.Update(id, { name: name, email: email, city: city })
    );
  }

  // deleteContact(id) {
  //   this.store.dispatch(new actions.Removed(id))
  // }

  deleteContact(id) {
    this.contacDoc = this.firestore.doc(`contacts/${id}`);
    this.contacDoc.delete();
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: "350px",
      data: data,
    });
  }
}

