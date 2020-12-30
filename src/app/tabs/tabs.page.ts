import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SemiModalPage } from '../semi-modal/semi-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public modalController: ModalController
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SemiModalPage,
      cssClass: 'my-custom-class', // global.scss に記入する必要あり 
      componentProps: {
        /* 
        'firstName': 'GDG',
        'lastName': 'Nara',
        'middleInitial': 'EdTech'
        */
      }
    });
    return await modal.present();
  }


}
