import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { BackgroundDirective } from 'src/app/directives/background.directive';
import { FilterPipe } from 'src/app/utils/filter.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    CardComponent,
    BackgroundDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
