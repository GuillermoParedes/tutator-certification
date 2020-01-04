import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  model: string;

  constructor(private httpClient: HttpClient) {
    this.model = 'characters';
  }

  /**
   * @description Get All characters of API Backend
   */
  getAll() {
    return this.httpClient.get(`${environment.api}/${this.model}`);
  }


  /**
   * @description Sum the array of numbers
   * @param:Array<number> appearance
   */
  getSumarray(value) {
    return value.slice('').reduce((acc, current) => {
      return acc + current;
    }, 0);
  }

}
