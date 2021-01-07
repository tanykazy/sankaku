import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SyncDotsInfoService } from '../services/sync-dots-info.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private syncDotsInfoService: SyncDotsInfoService
  ) {}

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

  selectedDots: any;

  drawCircle(context,canvas){
    let contextN = context;
    let canvasN = canvas;
    contextN = canvasN.nativeElement.getContext('2d');
    contextN.beginPath();
    /*
    contextN.fillStyle = 'white';
    contextN.fillRect(0, 0, 200, 200);
    */
    contextN.lineWidth = 4;
    contextN.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    contextN.fillStyle = "white";
    contextN.fill();  
    contextN.strokeStyle = "black" ;
    contextN.lineWidth = 4;
    contextN.stroke();
  }

  ngOnInit(){
    this.drawCircle(this.ctx1,this.canvas);
    this.drawCircle(this.ctx2,this.canvas2);
    this.drawCircle(this.ctx3,this.canvas3);
    this.drawCircle(this.ctx4,this.canvas4);
    this.drawCircle(this.ctx5,this.canvas5);
    this.drawCircle(this.ctx6,this.canvas6);
    this.drawCircle(this.ctx7,this.canvas7);
    this.drawCircle(this.ctx8,this.canvas8);
    this.drawCircle(this.ctx9,this.canvas9);
  }

}
