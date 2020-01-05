import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProjectsInterface } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public projects: ProjectsInterface;
  public searchText = '';

  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.userService.getProjects().pipe(takeUntil(this.unsubscribe$)).subscribe(response => this.projects = response);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  clearFilter() {
    this.searchText = '';
  }
}
