import { Component, OnInit, ViewChild, ElementRef, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-semi-modal',
  templateUrl: './semi-modal.page.html',
  styleUrls: ['./semi-modal.page.scss'],
})
export class SemiModalPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  // canvas の環境設定
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  context: any;

  constructor() {}
  private ctx: CanvasRenderingContext2D;

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


  hoge(event){
    console.log(event.clientX);
    console.log(event.clientY);
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, 200, 200);
    this.ctx.lineWidth = 2.5;
    this.ctx.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    this.ctx.fillStyle = "white";
    this.ctx.fill();  
    this.ctx.strokeStyle = "black" ;
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.stroke();
    this.ctx.closePath();

    // 12点を描く
    for(let key in this.coordinates){
      this.ctx.beginPath();
      this.ctx.strokeStyle = "black";
      this.ctx.arc(this.coordinates[key].x, this.coordinates[key].y, 4, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
      this.ctx.fillStyle = "rgba(0,0,0,0.7)";
      this.ctx.fill();
      this.ctx.stroke();
    }

  }

}
