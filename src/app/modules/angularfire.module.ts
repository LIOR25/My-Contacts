import { NgModule } from "@angular/core";
// import { environment } from "../environments/environment";
import { environment } from "../../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireFunctionsModule } from "@angular/fire/functions";



@NgModule({
  exports: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
})
export class AngularfireModule {}