import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import * as actions from '../../store/contact.actions';
import * as fromContact from "../../store/contact.reducer";
import { Observable } from "rxjs";
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

import { Contact } from "../../store/contact.reducer";
import { mergeMap, map, tap } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: "app-data-table",
//   templateUrl: "./data-table.component.html",
//   styleUrls: ["./data-table.component.scss"],
// })


export interface Item {
  id: string;
  name: string;
}
@Component({
  selector: "app-database",
  templateUrl: "./database.component.html",
  styleUrls: ["./database.component.scss"],
})
export class DatabaseComponent implements OnInit {
  // columnHeader = ["name", "city", "email", "actions"];

  columnHeader = {
    name: "name",
    city: "city",
    email: "email",
    id: "id",
    actions: 'actions',
  };
  // tableData : [] = [];
  // displayedColumns = ["name", "city", "email", "actions"];

  contacts: Observable<any>;
  contacDoc: AngularFirestoreDocument<Contact>;

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(
    private store: Store<fromContact.State>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // this.contacts = this.store.select(fromContact.selectAll);
    // this.store.dispatch(new actions.Query());
    console.log("RUNNING");
    this.itemsCollection = this.firestore.collection("contacts", (ref) => {
      return ref;
    });

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      ),
      tap((data) => console.log(data))
    );
  }

  // columnHeader = {
  //   studentID: "ID",
  //   fname: "First Name",
  //   weight: "Weight",
  //   symbol: "Code",
  // };

  // tableData: any[] = [
  //   { studentID: 1, fname: "Hydrogen", weight: 1.0079, symbol: "H"},
  //   { studentID: 2, fname: "Helium", weight: 4.0026, symbol: "He" },
  //   { studentID: 3, fname: "Lithium", weight: 6.941, symbol: "Li" },
  //   { studentID: 4, fname: "Beryllium", weight: 9.0122, symbol: "Be" },
  //   { studentID: 5, fname: "Boron", weight: 10.811, symbol: "B" },
  //   { studentID: 6, fname: "Carbon", weight: 12.0107, symbol: "C" },
  //   { studentID: 7, fname: "Nitrogen", weight: 14.0067, symbol: "N" },
  //   { studentID: 8, fname: "Oxygen", weight: 15.9994, symbol: "O" },
  //   { studentID: 9, fname: "Fluorine", weight: 18.9984, symbol: "F" },
  //   { studentID: 10, fname: "Neon", weight: 20.1797, symbol: "Ne" },
  // ];

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

