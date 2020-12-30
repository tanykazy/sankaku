import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-semi-modal',
  templateUrl: './semi-modal.page.html',
  styleUrls: ['./semi-modal.page.scss'],
})
export class SemiModalPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor() { }

  ngOnInit() {
  }

}
