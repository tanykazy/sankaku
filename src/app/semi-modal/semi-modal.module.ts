import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemiModalPageRoutingModule } from './semi-modal-routing.module';

import { SemiModalPage } from './semi-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemiModalPageRoutingModule
  ],
  declarations: [SemiModalPage]
})
export class SemiModalPageModule {}
