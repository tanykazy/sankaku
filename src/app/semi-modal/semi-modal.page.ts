import { Component, OnInit, ViewChild, ElementRef 
  // ,EventEmitter,Output
} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SyncDotsInfoService } from '../services/sync-dots-info.service'

@Component({
  selector: 'app-semi-modal',
  templateUrl: './semi-modal.page.html',
  styleUrls: ['./semi-modal.page.scss'],
})
export class SemiModalPage implements OnInit {

  constructor(
    private syncDotsInfoService: SyncDotsInfoService,
    public modalController: ModalController,
  ) {}

  /*
  @Output() created = new EventEmitter<any>();
  createdItem = "Hohohohoho!";
  onsubmit() {
    this.created.emit(this.createdItem);
  }
  */

  // 選択された点
  selectedDots = new Set();

  // Dot 情報をコンポーネントと同期する
  syncDots(){
    this.syncDotsInfoService.addSelectedDotsArray(this.selectedDots);
    this.syncDotsInfoService.syncDotsInfo();
    this.reset();
  }

  countDots(){
    if(this.syncDotsInfoService.selectedDotsArray.length < 9){
      return `あと${9 - this.syncDotsInfoService.selectedDotsArray.length}個、作ろう!`      
    }else{
      return `外側をクリックしてください`
    }
  }

  // canvas の環境設定
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;

  /* 点1~12 の座標を求めるのに必要な情報 */
  // 大きな円の情報
  radiusOfPie = 92; // 半径
  centerPointX = 100; // 中心点の座標
  centerPointY = 100; // 中心点の座標

  // 30° 60° 90° の三角形の辺の長さ
  shortLine = this.radiusOfPie /2;
  middleLine = this.shortLine * Math.sqrt(3);
  longLine = this.radiusOfPie;
  coordinates = {
    dot1:	{x: this.centerPointX, y: this.centerPointY - this.longLine },
    dot2:	{x: this.centerPointX + this.shortLine, y: this.centerPointY - this.middleLine},
    dot3:	{x: this.centerPointX + this.middleLine, y: this.centerPointY - this.shortLine},
    dot4:	{x: this.centerPointX + this.longLine, y: this.centerPointY},
    dot5:	{x: this.centerPointX + this.middleLine, y: this.centerPointY + this.shortLine},
    dot6:	{x: this.centerPointX + this.shortLine, y: this.centerPointY + this.middleLine},
    dot7:	{x: this.centerPointX, y: this.centerPointY + this.longLine},
    dot8:	{x: this.centerPointX - this.shortLine, y: this.centerPointY + this.middleLine},
    dot9:	{x: this.centerPointX - this.middleLine, y: this.centerPointY + this.shortLine},
    dot10:{x: this.centerPointX - this.longLine, y: this.centerPointY},
    dot11:{x: this.centerPointX - this.middleLine, y: this.centerPointY - this.shortLine},
    dot12:{x: this.centerPointX - this.shortLine, y: this.centerPointY - this.middleLine}
  }

  reset(){
    // 環境を白紙にする
    this.selectedDots.clear();
    this.context.clearRect(0, 0, 200, 200);
  
    // 円を描く
    this.context.beginPath();
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, 200, 200);
    this.context.lineWidth = 4;
    this.context.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    this.context.fillStyle = "rgba(0,0,0,0)";
    this.context.fill();
    this.context.strokeStyle = "black"
    this.context.stroke();
  
    // 12点を描く
    for(let key in this.coordinates){
      this.context.beginPath();
      this.context.strokeStyle = "black"
      this.context.arc(this.coordinates[key].x, this.coordinates[key].y, 4, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
      this.context.fillStyle = "rgba(0,0,0,0.7)";
      this.context.fill();
      this.context.stroke();
    }
  }


  init(event){

    this.context = this.canvas.nativeElement.getContext('2d');

    // クリック時の canvas 内での座標
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // クリック時の座標に応じてdotに色をつけて、selectedDots に追加する
    for(let key in this.coordinates){
      if((event.offsetX > this.coordinates[key].x - 15 && event.offsetX < this.coordinates[key].x + 15) 
          && (event.offsetY > this.coordinates[key].y - 15 && event.offsetY < this.coordinates[key].y + 15)){
        this.context.beginPath();
        this.context.lineWidth = 4;
        this.context.strokeStyle = "black"
        this.context.arc(this.coordinates[key].x, this.coordinates[key].y, 6, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
        this.context.fillStyle = "rgba(255,200,0,0.8)";
        this.context.fill();
        this.context.stroke();
        this.selectedDots.add(key);
      }
    }

    // 2点が選択されたら線を引く
    if(this.selectedDots.size == 2){
      let dots = Array.from(this.selectedDots.values());

      // 1 点目から 2点目を結ぶ
      this.context.beginPath();
      this.context.lineWidth = 4;
      this.setLineColor(dots[0],dots[1]);
      this.context.moveTo(this.coordinates[`${dots[0]}`].x, this.coordinates[`${dots[0]}`].y);
      this.context.lineTo(this.coordinates[`${dots[1]}`].x, this.coordinates[`${dots[1]}`].y);
      this.context.stroke();
    }

    // 3点が選択されたら三角形を描写する  
    if(this.selectedDots.size == 3){
      let dots = Array.from(this.selectedDots.values());

      // 2点目から3点目を結ぶ
      this.context.beginPath();
      this.setLineColor(dots[1],dots[2]);
      this.context.moveTo(this.coordinates[`${dots[1]}`].x, this.coordinates[`${dots[1]}`].y);
      this.context.lineTo(this.coordinates[`${dots[2]}`].x, this.coordinates[`${dots[2]}`].y);
      this.context.stroke();

      // 3点目から1点目を結ぶ
      this.context.beginPath();
      this.setLineColor(dots[2],dots[0]);
      this.context.moveTo(this.coordinates[`${dots[2]}`].x, this.coordinates[`${dots[2]}`].y);
      this.context.lineTo(this.coordinates[`${dots[0]}`].x, this.coordinates[`${dots[0]}`].y);
      this.context.stroke();
    }

    // 4点目が選択されたときに canvas をリセットする
    if(this.selectedDots.size > 3){
      this.reset();
    }
  }

  getDistanceOf2Dots(dot1, dot2){
    let result =  Math.round(Math.sqrt(Math.pow((this.coordinates[dot1].x - this.coordinates[dot2].x),2) + Math.pow((this.coordinates[dot1].y - this.coordinates[dot2].y),2)));
    return result
  }

  setLineColor (dot1,dot2) {
    let distanceOfDots = Math.round(Math.sqrt(Math.pow((this.coordinates[dot1].x - this.coordinates[dot2].x),2) + Math.pow((this.coordinates[dot1].y - this.coordinates[dot2].y),2)));
  
    if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot2")){
      this.context.strokeStyle = "red";
    }
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot3")){
      this.context.strokeStyle = "blue";
    }
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot4")){
      this.context.strokeStyle = "yellow";
    }
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot5")){
      this.context.strokeStyle = "green";
    }
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot6")){
      this.context.strokeStyle = "orange";
    }
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot7")){
      this.context.strokeStyle = "pink";
    }
  }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.beginPath();
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, 200, 200);
    this.context.lineWidth = 4;
    this.context.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    this.context.fillStyle = "white";
    this.context.fill();  
    this.context.strokeStyle = "black" ;
    this.context.lineWidth = 4;
    this.context.lineCap = "round";
    this.context.stroke();
    this.context.closePath();

    // 12点を描く
    for(let key in this.coordinates){
      this.context.beginPath();
      this.context.strokeStyle = "black";
      this.context.arc(this.coordinates[key].x, this.coordinates[key].y, 4, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
      this.context.fillStyle = "rgba(0,0,0,0.7)";
      this.context.fill();
      this.context.stroke();
    }
  }
}