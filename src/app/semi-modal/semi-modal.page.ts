import { Component, OnInit, ViewChild, ElementRef, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-semi-modal',
  templateUrl: './semi-modal.page.html',
  styleUrls: ['./semi-modal.page.scss'],
})
export class SemiModalPage implements OnInit {

  constructor() {}

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  // canvas の環境設定
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  selectedDots = new Set();
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

    var rect = event.target.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    console.log(`${x}:${y}`)

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

      // 1 点目から 2点目
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

      // 2点目から3点目
      this.context.beginPath();
      this.setLineColor(dots[1],dots[2]);
      this.context.moveTo(this.coordinates[`${dots[1]}`].x, this.coordinates[`${dots[1]}`].y);
      this.context.lineTo(this.coordinates[`${dots[2]}`].x, this.coordinates[`${dots[2]}`].y);
      this.context.stroke();

      // 3点目から1点目
      this.context.beginPath();
      this.setLineColor(dots[2],dots[0]);
      this.context.moveTo(this.coordinates[`${dots[2]}`].x, this.coordinates[`${dots[2]}`].y);
      this.context.lineTo(this.coordinates[`${dots[0]}`].x, this.coordinates[`${dots[0]}`].y);
      this.context.stroke();
    }

    // 4点目が選択されたときの処理
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
  
    // 距離が 1 点分の場合
    if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot2")){
      this.context.strokeStyle = "red";
    }
    // 距離が 2 点分の場合
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot3")){
      this.context.strokeStyle = "blue";
    }
    // 距離が 3 点分の場合
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot4")){
      this.context.strokeStyle = "yellow";
    }
    // 距離が 4 点分の場合
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot5")){
      this.context.strokeStyle = "green";
    }
    // 距離が 5 点分の場合
    else if(distanceOfDots == this.getDistanceOf2Dots("dot1","dot6")){
      this.context.strokeStyle = "orange";
    }
    // 距離が 6 点分の場合
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
