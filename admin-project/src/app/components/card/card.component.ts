import { Component, OnInit, Input } from '@angular/core';
import { PersonInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: PersonInterface;

  constructor() { }

  ngOnInit() {
  }

}
