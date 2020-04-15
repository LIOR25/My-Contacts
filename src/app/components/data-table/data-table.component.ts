import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/contact.actions';
import * as fromContact from "../../store/contact.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements OnInit {
  displayedColumns = ["name", "city", "email", "actions"];

  contacts: Observable<any>;
  constructor(private store: Store<fromContact.State>) {}

  ngOnInit() {
    this.contacts = this.store.select(fromContact.selectAll)
    console.log(this.contacts);
    
    this.store.dispatch(new actions.Query());
  }

  updateContact(id,name,email,city) {
    this.store.dispatch( new actions.Update(id, {name: name, email: email, city: city}))
  }

  // deleteContact(id) {
  //   this.store.dispatch(new actions.Delete(id))
  // }
}
