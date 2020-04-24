import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { from } from 'rxjs';
import { StoreModule } from "@ngrx/store";
import { contactReducer } from './store/contact.reducer';
import { EffectsModule } from "@ngrx/effects";
import { ContactEffects } from './store/contact.effects';



import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DatabaseComponent } from "./components/database/database.component";
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { AngularfireModule } from './modules/angularfire.module';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { DataTableComponent } from "./components/data-table/data-table.component";

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    DataTableComponent,
    EditDialogComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularfireModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    StoreModule.forRoot({ contact: contactReducer }),
    EffectsModule.forRoot([ContactEffects]),
    // EffectsModule.forFeature([ContactEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent],
})
export class AppModule {}
