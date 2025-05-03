import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, MatProgressBar, NgFor],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses = [
    { title: 'angular', category: 'ui', description: 'jhjh', progress: '20%' },
  ];
}
