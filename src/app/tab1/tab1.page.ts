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
    this.ctx.fillStyle = 'red';
    this.ctx.strokeStyle = "red" ;
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(50, 200);
    this.ctx.stroke();
  }

}
