import { Injectable } from '@angular/core';
import { switchMap, mergeMap, catchError , map} from "rxjs/operators";
// import "rxjs/Rx";

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";
import "rxjs/add/operator/map";
// import "rxjs/add/operator/switchMap";
// import "rxjs/add/observable/from";
// import * as actions from "./contact.actions";
// import * as fromContact from "./contact.reducer";

import { Contact } from './contact.reducer';
import * as ContactActions from './contact.actions';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable()
export class ContactEffects {
    // @Effect()
    //     query$: Observable<Action> = this.actions$.ofType(ContactActions.QUERY).pipe(
    //         switchMap(action => {
    //         console.log(action)
    //         return this.firestore.collection<Contact>('contacts',ref =>{
    //             return ref.where('name', '==', 'Gal')
    //         })
    //         .stateChanges()
    //         }),
    //         mergeMap(actions => actions),
    //         map(action => {
    //             return {
    //                 type: `[Contact] ${action.type}`,
    //                 payload: {
    //                     ...action.payload.doc.data(),
    //                     id: action.payload.doc.id,
    //                 }
    //             };
    //         })
    //     );



//   @Effect()
//   query$: Observable<Action> = this.actions$.pipe(ofType(ContactActions.QUERY)
//     ,switchMap((action) => {
//       const ref = this.firestore.collection<fromContact.Contact>("contacts");
//       return ref.snapshotChanges().map((arr) => {
//         return arr.map((doc) => {
//           const data = doc.payload.doc.data();
//           return { id: doc.payload.doc.id, ...data } as fromContact.Contact;
//         });
//       });
//     })
//     .map((arr) => {
//       console.log(arr);
//       return new ContactActions.AddAll(arr);
//     })
//     );






  @Effect()
  query$: Observable<Action> = this.actions$.pipe(ofType(ContactActions.QUERY)
    ,switchMap((action) => {
      console.log(action);
      return this.firestore.collection<Contact>("contacts", (ref) => {
            console.log(ref);
            
          return ref.where("name", "==", "Gal");
        })
        .stateChanges();
    }),
    mergeMap((actions) => actions),
    map((action) => {
        console.log(action);
        
      return {
        type: `[Contact] ${action.type}`,
        payload: {
            ...action.payload.doc.data(),
            id: action.payload.doc.id,
        },
      };
    })
  );

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}