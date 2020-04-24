import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DatabaseComponent } from "./components/database/database.component";
import { AuthComponent } from './auth/auth.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  // {
  //   path: " ",
  //   component: ToolbarComponent,
  //   children: [{ path: "", component: MainContentComponent }],
  // },
  { path: "sidenav", component: SidenavComponent },

  { path: "database", component: SidenavComponent },
  { path: "authentication", component: MainContentComponent },
  { path: "auth", component: AuthComponent },

  { path: "", redirectTo: "database", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
