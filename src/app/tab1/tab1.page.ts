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

  @ViewChild('canvas3', { static: true })
  canvas3: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas4', { static: true })
  canvas4: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas5', { static: true })
  canvas5: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas6', { static: true })
  canvas6: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas7', { static: true })
  canvas7: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas8', { static: true })
  canvas8: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas9', { static: true })
  canvas9: ElementRef<HTMLCanvasElement>;

  ctx1: any;
  ctx2: any;
  ctx3: any;
  ctx4: any;
  ctx5: any;
  ctx6: any;
  ctx7: any;
  ctx8: any;
  ctx9: any;

  ngOnInit(){

    // canvas1
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

    // canvas2
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

    // canvas3
    this.ctx3 = this.canvas3.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx3.beginPath();
    this.ctx3.moveTo(150,0);
    this.ctx3.lineTo(150, 300);
    this.ctx3.strokeStyle = "red" ;
    this.ctx3.lineWidth = 4;
    this.ctx3.lineCap = "round";
    this.ctx3.stroke();
    this.ctx3.closePath(); 
    // 長さ3点分
    this.ctx3.beginPath();
    this.ctx3.moveTo(150, 300);
    this.ctx3.lineTo(0, 150);
    this.ctx3.lineWidth = 4;
    this.ctx3.lineCap = "round";
    this.ctx3.strokeStyle = "blue" ;
    this.ctx3.stroke();
    // 長さ3点分
    this.ctx3.beginPath();
    this.ctx3.moveTo(0, 150);
    this.ctx3.lineTo(150, 0);
    this.ctx3.lineWidth = 4;
    this.ctx3.lineCap = "round";
    this.ctx3.strokeStyle = "blue" ;
    this.ctx3.stroke();

    // canvas4
    this.ctx4 = this.canvas4.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx4.beginPath();
    this.ctx4.moveTo(150,0);
    this.ctx4.lineTo(150, 300);
    this.ctx4.strokeStyle = "red" ;
    this.ctx4.lineWidth = 4;
    this.ctx4.lineCap = "round";
    this.ctx4.stroke();
    this.ctx4.closePath(); 
    // 長さ3点分
    this.ctx4.beginPath();
    this.ctx4.moveTo(150, 300);
    this.ctx4.lineTo(0, 150);
    this.ctx4.lineWidth = 4;
    this.ctx4.lineCap = "round";
    this.ctx4.strokeStyle = "blue" ;
    this.ctx4.stroke();
    // 長さ3点分
    this.ctx4.beginPath();
    this.ctx4.moveTo(0, 150);
    this.ctx4.lineTo(150, 0);
    this.ctx4.lineWidth = 4;
    this.ctx4.lineCap = "round";
    this.ctx4.strokeStyle = "blue" ;
    this.ctx4.stroke();    

    // canvas5
    this.ctx5 = this.canvas5.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx5.beginPath();
    this.ctx5.moveTo(150,0);
    this.ctx5.lineTo(150, 300);
    this.ctx5.strokeStyle = "red" ;
    this.ctx5.lineWidth = 4;
    this.ctx5.lineCap = "round";
    this.ctx5.stroke();
    this.ctx5.closePath(); 
    // 長さ3点分
    this.ctx5.beginPath();
    this.ctx5.moveTo(150, 300);
    this.ctx5.lineTo(0, 150);
    this.ctx5.lineWidth = 4;
    this.ctx5.lineCap = "round";
    this.ctx5.strokeStyle = "blue" ;
    this.ctx5.stroke();
    // 長さ3点分
    this.ctx5.beginPath();
    this.ctx5.moveTo(0, 150);
    this.ctx5.lineTo(150, 0);
    this.ctx5.lineWidth = 4;
    this.ctx5.lineCap = "round";
    this.ctx5.strokeStyle = "blue" ;
    this.ctx5.stroke();

    // canvas6
    this.ctx6 = this.canvas6.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx6.beginPath();
    this.ctx6.moveTo(150,0);
    this.ctx6.lineTo(150, 300);
    this.ctx6.strokeStyle = "red" ;
    this.ctx6.lineWidth = 4;
    this.ctx6.lineCap = "round";
    this.ctx6.stroke();
    this.ctx6.closePath(); 
    // 長さ3点分
    this.ctx6.beginPath();
    this.ctx6.moveTo(150, 300);
    this.ctx6.lineTo(0, 150);
    this.ctx6.lineWidth = 4;
    this.ctx6.lineCap = "round";
    this.ctx6.strokeStyle = "blue" ;
    this.ctx6.stroke();
    // 長さ3点分
    this.ctx6.beginPath();
    this.ctx6.moveTo(0, 150);
    this.ctx6.lineTo(150, 0);
    this.ctx6.lineWidth = 4;
    this.ctx6.lineCap = "round";
    this.ctx6.strokeStyle = "blue" ;
    this.ctx6.stroke();

    // canvas7
    this.ctx7 = this.canvas7.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx7.beginPath();
    this.ctx7.moveTo(150,0);
    this.ctx7.lineTo(150, 300);
    this.ctx7.strokeStyle = "red" ;
    this.ctx7.lineWidth = 4;
    this.ctx7.lineCap = "round";
    this.ctx7.stroke();
    this.ctx7.closePath(); 
    // 長さ3点分
    this.ctx7.beginPath();
    this.ctx7.moveTo(150, 300);
    this.ctx7.lineTo(0, 150);
    this.ctx7.lineWidth = 4;
    this.ctx7.lineCap = "round";
    this.ctx7.strokeStyle = "blue" ;
    this.ctx7.stroke();
    // 長さ3点分
    this.ctx7.beginPath();
    this.ctx7.moveTo(0, 150);
    this.ctx7.lineTo(150, 0);
    this.ctx7.lineWidth = 4;
    this.ctx7.lineCap = "round";
    this.ctx7.strokeStyle = "blue" ;
    this.ctx7.stroke();

    // canvas8
    this.ctx8 = this.canvas8.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx8.beginPath();
    this.ctx8.moveTo(150,0);
    this.ctx8.lineTo(150, 300);
    this.ctx8.strokeStyle = "red" ;
    this.ctx8.lineWidth = 4;
    this.ctx8.lineCap = "round";
    this.ctx8.stroke();
    this.ctx8.closePath(); 
    // 長さ3点分
    this.ctx8.beginPath();
    this.ctx8.moveTo(150, 300);
    this.ctx8.lineTo(0, 150);
    this.ctx8.lineWidth = 4;
    this.ctx8.lineCap = "round";
    this.ctx8.strokeStyle = "blue" ;
    this.ctx8.stroke();
    // 長さ3点分
    this.ctx8.beginPath();
    this.ctx8.moveTo(0, 150);
    this.ctx8.lineTo(150, 0);
    this.ctx8.lineWidth = 4;
    this.ctx8.lineCap = "round";
    this.ctx8.strokeStyle = "blue" ;
    this.ctx8.stroke();

    // canvas9
    this.ctx9 = this.canvas9.nativeElement.getContext('2d');
    // 長さ6点分
    this.ctx9.beginPath();
    this.ctx9.moveTo(150,0);
    this.ctx9.lineTo(150, 300);
    this.ctx9.strokeStyle = "red" ;
    this.ctx9.lineWidth = 4;
    this.ctx9.lineCap = "round";
    this.ctx9.stroke();
    this.ctx9.closePath(); 
    // 長さ3点分
    this.ctx9.beginPath();
    this.ctx9.moveTo(150, 300);
    this.ctx9.lineTo(0, 150);
    this.ctx9.lineWidth = 4;
    this.ctx9.lineCap = "round";
    this.ctx9.strokeStyle = "blue" ;
    this.ctx9.stroke();
    // 長さ3点分
    this.ctx9.beginPath();
    this.ctx9.moveTo(0, 150);
    this.ctx9.lineTo(150, 0);
    this.ctx9.lineWidth = 4;
    this.ctx9.lineCap = "round";
    this.ctx9.strokeStyle = "blue" ;
    this.ctx9.stroke();

  }

}
