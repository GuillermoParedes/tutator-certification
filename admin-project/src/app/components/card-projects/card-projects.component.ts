import { Component, OnInit, Input } from '@angular/core';
import { ProjectInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss']
})
export class CardProjectsComponent implements OnInit {
  @Input() data: ProjectInterface;

  constructor() { }

  ngOnInit() {
  }

}
