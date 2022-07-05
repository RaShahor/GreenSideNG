import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormProcessingBarComponent } from './form-processing-bar/form-processing-bar.component';
import { TemplateListComponent } from './template-list/template-list.component';



@NgModule({
  declarations: [
    FormListComponent,
    FormProcessingBarComponent,
    TemplateListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormProcessingModule { }
