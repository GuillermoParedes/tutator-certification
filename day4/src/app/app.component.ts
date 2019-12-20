import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Guillermo David';
  job: string = 'Software Development Engineer';
  title = 'day4';

  characters = [];
  constructor(private characterService: CharactersService) {

  }

  ngOnInit() {
    this.characterService.getAll().subscribe((response: Array<any>) => {
      console.log('response', response);
      this.characters = response;
    });
  }
}
