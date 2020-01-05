import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInterface} from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers() {
    return this.httpClient.get('assets/api/users.json')
      .pipe(
        tap(response => console.log('Response Users', response))
      );
  }

  getProjects() {
    return this.httpClient.get('assets/api/projects.json')
      .pipe(
        tap(response => console.log('Response Projects', response))
      );
  }

}
