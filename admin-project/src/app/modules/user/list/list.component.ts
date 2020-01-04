import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, map, filter, distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';
import { UsersInterface } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public users: UsersInterface;
  public searchText = '';

  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.userService.getUsers().pipe(takeUntil(this.unsubscribe$)).subscribe(response => this.users = response);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  clearFilter() {
    this.searchText = '';
  }
}
