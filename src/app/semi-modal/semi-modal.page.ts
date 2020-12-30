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

  ctx: any;

  constructor() { }

  ngOnInit() {
    // canvas
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
    this.ctx.strokeStyle = "green" ;
    this.ctx.stroke();
    // 長さ3点分
    this.ctx.beginPath();
    this.ctx.moveTo(0, 150);
    this.ctx.lineTo(150, 0);
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "green" ;
    this.ctx.stroke();

  }

}
