import { Component, OnInit } from '@angular/core';

import { PieBoxComponent } from '../pie-box/pie-box.component'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(
  ) {}

  pie: PieBoxComponent;

  ngOnInit(){
  }

}