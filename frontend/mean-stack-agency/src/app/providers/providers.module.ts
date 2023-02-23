import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProvidersComponent,
    DeleteProvidersComponent,
    DetailsProvidersComponent,
    EditProvidersComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    AddProvidersComponent,
    DeleteProvidersComponent,
    DetailsProvidersComponent,
    EditProvidersComponent,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProvidersModule { }
