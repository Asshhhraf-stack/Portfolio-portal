import { Component } from '@angular/core';
import { PROJECTS } from '../projects.data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
})
export class ProjectsList {
  protected readonly projects = PROJECTS;
}
