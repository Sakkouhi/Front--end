import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderShowComponent} from './provider/provider-show/provider-show.component';
import {ProviderAddComponent} from './provider/provider-add/provider-add.component';
import {ProviderEditComponent} from './provider/provider-edit/provider-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'providers/add', pathMatch: 'full'},
  {path: 'providers/add', component: ProviderAddComponent},
  {path: 'providers/:id', component: ProviderShowComponent},
  {path: 'providers/:id/edit', component: ProviderEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
