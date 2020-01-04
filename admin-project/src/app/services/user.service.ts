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
    // return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        tap(response => console.log('Response Users', response))
      );
  }

}
