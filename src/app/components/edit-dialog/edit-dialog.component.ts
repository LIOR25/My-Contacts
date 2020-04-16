import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.scss"],
})
export class EditDialogComponent implements OnInit {
  newEmail: string;
  newName: string;
  newCity: string;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  updateEmail(): void {
    this.firestore
      .collection("contacts")
      .doc(this.data.id)
      .update({ email: this.newEmail, name: this.newName, city: this.newCity });
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.newEmail = this.data.email;
    this.newName = this.data.name;
    this.newCity = this.data.city;
  }
}
