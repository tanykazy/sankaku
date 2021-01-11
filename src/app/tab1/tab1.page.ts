import { Component, OnInit, ViewChild, ElementRef, Inject, Input, OnDestroy } from '@angular/core';
import { SyncDotsInfoService } from '../services/sync-dots-info.service'
import { ModalController } from '@ionic/angular';
import { SemiModalPage } from '../semi-modal/semi-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit, OnDestroy {

  constructor(
    private syncDotsInfoService: SyncDotsInfoService,
    public modalController: ModalController
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SemiModalPage,
      cssClass: 'my-custom-class', // global.scss に記入する必要あり 
      //componentProps: {'firstName': 'GDG','lastName': 'Nara'}
    });
    return await modal.present();
  }

  // canvas 関連
  @ViewChild('canvas1', { static: true })
  canvas1: ElementRef<HTMLCanvasElement>;
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

  // context
  context1: any;
  context2: any;
  context3: any;
  context4: any;
  context5: any;
  context6: any;
  context7: any;
  context8: any;
  context9: any;

  // canvas1~9, contex1~9 への参照
  canvases;
  contexes;

  // 白紙の円を描く
  drawCircle(context, canvas) {
    let contextN = context;
    let canvasN = canvas;
    contextN = canvasN.nativeElement.getContext('2d');
    contextN.beginPath();
    contextN.lineWidth = 4;
    contextN.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    contextN.fillStyle = "white";
    contextN.fill();
    contextN.strokeStyle = "black";
    contextN.lineWidth = 4;
    contextN.stroke();
  }

  /* 点1~12 の座標を求めるのに必要な情報 */
  // 大きな円の情報
  radiusOfPie = 92; // 半径
  centerPointX = 100; // 中心点の座標
  centerPointY = 100; // 中心点の座標

  // 30° 60° 90° の三角形の辺の長さ
  shortLine = this.radiusOfPie / 2;
  middleLine = this.shortLine * Math.sqrt(3);
  longLine = this.radiusOfPie;
  coordinates = {
    dot1: { x: this.centerPointX, y: this.centerPointY - this.longLine },
    dot2: { x: this.centerPointX + this.shortLine, y: this.centerPointY - this.middleLine },
    dot3: { x: this.centerPointX + this.middleLine, y: this.centerPointY - this.shortLine },
    dot4: { x: this.centerPointX + this.longLine, y: this.centerPointY },
    dot5: { x: this.centerPointX + this.middleLine, y: this.centerPointY + this.shortLine },
    dot6: { x: this.centerPointX + this.shortLine, y: this.centerPointY + this.middleLine },
    dot7: { x: this.centerPointX, y: this.centerPointY + this.longLine },
    dot8: { x: this.centerPointX - this.shortLine, y: this.centerPointY + this.middleLine },
    dot9: { x: this.centerPointX - this.middleLine, y: this.centerPointY + this.shortLine },
    dot10: { x: this.centerPointX - this.longLine, y: this.centerPointY },
    dot11: { x: this.centerPointX - this.middleLine, y: this.centerPointY - this.shortLine },
    dot12: { x: this.centerPointX - this.shortLine, y: this.centerPointY - this.middleLine }
  }

  getDistanceOf2Dots(dot1, dot2) {
    let result = Math.round(Math.sqrt(Math.pow((this.coordinates[`${dot1}`].x - this.coordinates[`${dot2}`].x), 2) + Math.pow((this.coordinates[`${dot1}`].y - this.coordinates[`${dot2}`].y), 2)));
    return result
  }

  setLineColor(dot1, dot2, context) {
    let distanceOfDots = Math.round(Math.sqrt(Math.pow((this.coordinates[dot1].x - this.coordinates[dot2].x), 2)
      + Math.pow((this.coordinates[dot1].y - this.coordinates[dot2].y), 2)));

    if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot2")) {
      context.strokeStyle = "red";
    }
    else if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot3")) {
      context.strokeStyle = "blue";
    }
    else if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot4")) {
      context.strokeStyle = "yellow";
    }
    else if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot5")) {
      context.strokeStyle = "green";
    }
    else if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot6")) {
      context.strokeStyle = "orange";
    }
    else if (distanceOfDots == this.getDistanceOf2Dots("dot1", "dot7")) {
      context.strokeStyle = "pink";
    }
  }

  drawTriangles() {
    let contexes = this.contexes;
    let dots = this.syncDotsInfoService.syncDotsInfo();
    for (let i = 0; i < dots.length; i++) {
      contexes[i] = this.canvases[i].nativeElement.getContext('2d');
      contexes[i].lineWidth = 4;
      // 1 点目から 2点目を結ぶ
      contexes[i].beginPath();
      this.setLineColor(`${dots[i][0]}`, `${dots[i][1]}`, this.contexes[i]);
      contexes[i].moveTo(this.coordinates[`${dots[i][0]}`].x, this.coordinates[`${dots[i][0]}`].y);
      contexes[i].lineTo(this.coordinates[`${dots[i][1]}`].x, this.coordinates[`${dots[i][1]}`].y);
      contexes[i].stroke();
      // 2点目から3点目を結ぶ
      contexes[i].beginPath();
      this.setLineColor(dots[i][1], dots[i][2], this.contexes[i]);
      contexes[i].moveTo(this.coordinates[`${dots[i][1]}`].x, this.coordinates[`${dots[i][1]}`].y);
      contexes[i].lineTo(this.coordinates[`${dots[i][2]}`].x, this.coordinates[`${dots[i][2]}`].y);
      contexes[i].stroke();
      // 3点目から1点目を結ぶ
      contexes[i].beginPath();
      this.setLineColor(dots[i][2], dots[i][0], this.contexes[i]);
      contexes[i].moveTo(this.coordinates[`${dots[i][2]}`].x, this.coordinates[`${dots[i][2]}`].y);
      contexes[i].lineTo(this.coordinates[`${dots[i][0]}`].x, this.coordinates[`${dots[i][0]}`].y);
      contexes[i].stroke();
    }
  }

  ngOnInit() {
    this.canvases = [this.canvas1, this.canvas2, this.canvas3, this.canvas4, this.canvas5, this.canvas6, this.canvas7, this.canvas8, this.canvas9];
    this.contexes = [this.context1, this.context2, this.context3, this.context4, this.context5, this.context6, this.context7, this.context8, this.context9];
    // 円を描く
    for (let i = 0; this.canvases.length > i; i++) {
      this.drawCircle(this.contexes[i], this.canvases[i]);
    }

    this.syncDotsInfoService.observedDots.subscribe(data => {
      // console.log(data);
      this.drawTriangles();
    })

  }

  ngOnDestroy() {
    this.syncDotsInfoService.observedDots.unsubscribe();
  }
}
