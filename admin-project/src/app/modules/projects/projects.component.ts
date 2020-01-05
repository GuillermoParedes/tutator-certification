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
    picture : 'https://media.licdn.com/dms/image/C4E03AQHvAO8xQN359w/profile-displayphoto-shrink_100_100/0?e=1583971200&v=beta&t=rKnf2RERIkTsyUlp3rkE3dSq5I0a3lQPwwhtm8f05Zg'
  }
  constructor() { }

  ngOnInit() {  }

}
