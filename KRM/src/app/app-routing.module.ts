import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { UserpageComponent } from './userpage/userpage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { FavotireComponent } from './favotire/favotire.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'a1', component:A1Component},
  {path: 'a2', component:A2Component},
  {path: 'b1', component:B1Component},
  {path: 'b2', component:B2Component},
  {path: 'fav', component:FavotireComponent},
  {path: 'userpage', component:UserpageComponent},
  {path: 'settings', component:SettingspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
