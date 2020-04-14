import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


const routes: Routes = [
  // {
  //   path: " ",
  //   component: ToolbarComponent,
  //   children: [{ path: "", component: MainContentComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
