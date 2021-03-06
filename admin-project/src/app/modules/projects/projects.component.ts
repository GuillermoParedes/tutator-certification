import { Component, OnInit } from '@angular/core';
import { PersonInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  profile: PersonInterface = {
    id: 1123132,
    first_name: 'Guillermo',
    last_name: 'Paredes',
    email: 'info@codevs.tech',
    gender: 'Male',
    university: 'Universidad Mayor de San Andres',
    picture : 'https://codevs.tech/_next/static/images/LogoCodevsVertical-6c708588315320b17078086bd84dbe49.png'
  };
  constructor() { }

  ngOnInit() {  }

}
