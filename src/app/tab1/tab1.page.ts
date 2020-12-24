import { Component, OnInit, ViewChild } from '@angular/core';

import { PieBoxComponent } from '../pie-box/pie-box.component'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  @ViewChild(PieBoxComponent) pieBox: PieBoxComponent;

  constructor(
  ) {}

  ngOnInit(){
  }

}
