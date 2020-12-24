import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

import * as p5 from 'p5';

@Component({
  selector: 'app-pie-box',
  templateUrl: './pie-box.component.html',
  styleUrls: ['./pie-box.component.scss'],
})
export class PieBoxComponent implements OnInit {

    constructor(
      private el: ElementRef,
      private renderer: Renderer2
    ) {}
  
    ngOnInit() {
  
      new p5(p => {
        let x = 0;
        let y = 0;
  
        p.setup = () => {
          p.createCanvas(400, 400);
        };
  
        p.draw = () => {
          p.background(0);
          p.fill(255);
          p.rect(0, 0, 500, 500);
        };
      }, this.el.nativeElement);
  
    }
  }
