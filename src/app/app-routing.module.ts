import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DataTableComponent } from './components/data-table/data-table.component';


const routes: Routes = [
  // {
  //   path: " ",
  //   component: ToolbarComponent,
  //   children: [{ path: "", component: MainContentComponent }],
  // },

  { path: "database", component: DataTableComponent },
  { path: "authentication", component: MainContentComponent },
  { path: "", redirectTo: "database", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
