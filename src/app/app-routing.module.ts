import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./form-processing/form-processing.module').then(m => m.FormProcessingModule)
  },
  {
    path: 'signer',
    loadChildren: () => import('./sign/sign.module').then(m => m.SignModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
