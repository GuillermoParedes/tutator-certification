import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character = {
    img: '',
    name: '',
    nickname: '',
    occupation: [],
    appearance: []
  };
  constructor() { }

  ngOnInit() {
  }

}
