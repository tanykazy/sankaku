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
    contextN.lineWidth = 4;
    contextN.arc(100, 100, 92, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    contextN.fillStyle = "white";
    contextN.fill();  
    contextN.strokeStyle = "black" ;
    contextN.lineWidth = 4;
    contextN.stroke();
  }

  ngOnInit(){
    const canvases = [this.canvas1,this.canvas2,this.canvas3,this.canvas4,this.canvas5,this.canvas6,this.canvas7,this.canvas8,this.canvas9];
    const contexes = [this.ctx1,this.ctx2,this.ctx3,this.ctx4,this.ctx5,this.ctx6,this.ctx7,this.ctx8,this.ctx9];

    for(let i = 0; canvases.length > i; i++){
      this.drawCircle(contexes[i],canvases[i]);
    }

  }

}
