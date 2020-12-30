import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { SemiModalPage } from '../semi-modal/semi-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public modalController: ModalController
  ) {}

  // モーダルを表示
  async presentModal() {
    const modal = await this.modalController.create({
      component: SemiModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'GDG',
        'lastName': 'Nara',
        'middleInitial': 'EdTech'
      }
    });
    return await modal.present();
  }


  // canvas の環境設定
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas2', { static: true })
  canvas2: ElementRef<HTMLCanvasElement>;

  ctx1: any;
  ctx2: any;

  ngOnInit(){
    this.ctx1 = this.canvas.nativeElement.getContext('2d');

    // 長さ6点分
    this.ctx1.beginPath();
    this.ctx1.moveTo(150,0);
    this.ctx1.lineTo(150, 300);
    this.ctx1.strokeStyle = "red" ;
    this.ctx1.lineWidth = 4;
    this.ctx1.lineCap = "round";
    this.ctx1.stroke();
    this.ctx1.closePath(); 

    // 長さ3点分
    this.ctx1.beginPath();
    this.ctx1.moveTo(150, 300);
    this.ctx1.lineTo(0, 150);
    this.ctx1.lineWidth = 4;
    this.ctx1.lineCap = "round";
    this.ctx1.strokeStyle = "blue" ;
    this.ctx1.stroke();

    // 長さ3点分
    this.ctx1.beginPath();
    this.ctx1.moveTo(0, 150);
    this.ctx1.lineTo(150, 0);
    this.ctx1.lineWidth = 4;
    this.ctx1.lineCap = "round";
    this.ctx1.strokeStyle = "blue" ;
    this.ctx1.stroke();


    this.ctx2 = this.canvas2.nativeElement.getContext('2d');

    // 長さ6分
    this.ctx2.beginPath();
    this.ctx2.moveTo(150,0);
    this.ctx2.lineTo(150, 300);
    this.ctx2.strokeStyle = "red" ;
    this.ctx2.lineWidth = 4;
    this.ctx2.lineCap = "round";
    this.ctx2.stroke();
    this.ctx2.closePath(); 

    // 長さ3分
    this.ctx2.beginPath();
    this.ctx2.moveTo(150, 300);
    this.ctx2.lineTo(300, 150);
    this.ctx2.lineWidth = 4;
    this.ctx2.lineCap = "round";
    this.ctx2.strokeStyle = "blue" ;
    this.ctx2.stroke();

    // 長さ3分
    this.ctx2.beginPath();
    this.ctx2.moveTo(300, 150);
    this.ctx2.lineTo(150, 0);
    this.ctx2.lineWidth = 4;
    this.ctx2.lineCap = "round";
    this.ctx2.strokeStyle = "blue" ;
    this.ctx2.stroke();    
  }

}
