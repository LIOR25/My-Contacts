import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map, flatMap } from "rxjs/operators";
import { combineLatest } from "rxjs/observable/combineLatest";


export interface Item {
  id: string;
  name: string;
}

 



@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
})
export class MainContentComponent implements OnInit {

  displayedColumns = ["name", "actions"];
  // family: Observable<any>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private firestore: AngularFirestore) {
  }


  ngOnInit(): void {




    // const contactsRef = this.firestore.collection("contacts");
    //  const familyRef = contactsRef.doc('').collection("family").valueChanges();
    //       const faRef = contactsRef
    //         .doc("")
    //         .collection("family")
    //         .valueChanges();

    // console.log(familyRef);

    // const combinedList = combineLatest<any[]>(familyRef, faRef).pipe(
    //   map((arr) => arr.reduce((acc, cur) => acc.concat(cur)))
    // );




    this.itemsCollection = this.firestore.collection("family", (ref) => {
      return ref;
    });

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );





  //   this.family = this.firestore.collection("family").valueChanges();
  //   this.items = this.firestore
  //     .collection("contacts")
  //     .doc("name")
  //     .collection("family")
  //     .doc("name")
  //     .valueChanges()
  //     console.log(this.items, 'this');
  }
}
