import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignerListComponent } from './signers-list/signers-list.component';
import { NewSignerComponent } from './new-signer/new-signer.component';



@NgModule({
  declarations: [
    SignerListComponent,
    NewSignerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignModule { }
