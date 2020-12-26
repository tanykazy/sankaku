import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(
  ) {}

  // canvas の環境設定
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: any;

  movingLock = true;
  unlock(){
    if(this.movingLock == true){
      this.movingLock = false;
    }else{
      this.movingLock = true;
    }
  }

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // 長さ6点分
    this.ctx.beginPath();
    this.ctx.moveTo(150,0);
    this.ctx.lineTo(150, 300);
    this.ctx.strokeStyle = "red" ;
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.stroke();
    this.ctx.closePath(); 

    // 長さ3点分
    this.ctx.beginPath();
    this.ctx.moveTo(150, 300);
    this.ctx.lineTo(0, 150);
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "blue" ;
    this.ctx.stroke();

    // 長さ3点分
    this.ctx.beginPath();
    this.ctx.moveTo(0, 150);
    this.ctx.lineTo(150, 0);
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "blue" ;
    this.ctx.stroke();
  }

}
