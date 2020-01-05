import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { FilterPipe } from 'src/app/utils/filter.pipe';
import { BackgroundDirective } from 'src/app/directives/background.directive';
import { CardProjectsComponent } from 'src/app/components/card-projects/card-projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
    component: ProjectsComponent,
  },
  {
    path: '',
    component: ProjectsComponent,
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
    ProjectsComponent,
    ListComponent,
    CardComponent,
    CardProjectsComponent,
    BackgroundDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectsModule { }
