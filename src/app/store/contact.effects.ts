import { Injectable } from "@angular/core";
import {
  switchMap,
  mergeMap,
  catchError,
  map,
} from "rxjs/operators";
// import "rxjs/Rx";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import "rxjs/add/operator/map";
// import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/fromPromise";
// import * as actions from "./contact.actions";
// import * as fromContact from "./contact.reducer";

import { Contact } from "./contact.reducer";
import * as ContactActions from "./contact.actions";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable()
export class ContactEffects {
 
    @Effect()
    query$: Observable<Action> = this.actions$.pipe(
      ofType(ContactActions.QUERY),
      switchMap((action) => {
        console.log(action);
        return this.firestore
          .collection<Contact>("contacts", (ref) => {
            console.log(ref);
            return ref;
          })
          .stateChanges();
      }),
      mergeMap((actions) => actions),
      map((action) => {
        console.log(action.payload.doc.data());
        return {
          type: `[Contacts] ${action.type}`,
          payload: {
            ...action.payload.doc.data(),
            id: action.payload.doc.id,
          },
        };
      })
    );



    @Effect()
    update$: Observable<Action> = this.actions$.pipe(ofType(ContactActions.UPDATE),
    map((action: ContactActions.Update) => action),
    switchMap(date => {
      const ref = this.firestore.doc<Contact>(`contacts/${date.id}`)
      return Observable.fromPromise(ref.update(date.changes))
    }),
    map(() => new ContactActions.Success())
    )

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}
