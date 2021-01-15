import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemiModalPage } from './semi-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SemiModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiModalPageRoutingModule {}
