import { Routes } from '@angular/router';
import { About } from './about/about';
import { Landing } from './landing/landing';
import { ProjectsList } from './projects/projects-list/projects-list';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: ProjectsList,
  },
];
