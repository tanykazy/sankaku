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

  ngOnInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // 長さ6点分
    this.ctx.beginPath();
    this.ctx.moveTo(150,5);
    this.ctx.lineTo(150, 295);
    this.ctx.strokeStyle = "red" ;
    this.ctx.stroke();
    this.ctx.closePath(); 

    // 長さ3点分
    this.ctx.beginPath();
    this.ctx.moveTo(150, 295);
    this.ctx.lineTo(5, 150);
    this.ctx.strokeStyle = "blue" ;
    this.ctx.stroke();

    // 長さ3点分
    this.ctx.beginPath();
    this.ctx.moveTo(5, 150);
    this.ctx.lineTo(150, 5);
    this.ctx.strokeStyle = "blue" ;
    this.ctx.stroke();
  }

}
