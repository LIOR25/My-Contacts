import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms"
import { from } from 'rxjs';
import { StoreModule } from "@ngrx/store";
import { contactReducer } from './store/contact.reducer';
import { EffectsModule } from "@ngrx/effects";
import { ContactEffects } from './store/contact.effects';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    DataTableComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({ contact: contactReducer }),
    EffectsModule.forRoot([ContactEffects]),
    // EffectsModule.forFeature([ContactEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent],
})
export class AppModule {}
