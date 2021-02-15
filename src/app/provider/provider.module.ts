import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderEditComponent } from './provider-edit/provider-edit.component';
import { ProviderShowComponent } from './provider-show/provider-show.component';
import {ProviderService} from '../services/provider.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProviderAddComponent, ProviderEditComponent, ProviderShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProviderService],
})
export class ProviderModule { }
