import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skill-tracker',
  imports: [MatCardModule, MatProgressBar, NgFor],
  templateUrl: './skill-tracker.component.html',
  styleUrl: './skill-tracker.component.scss',
})
export class SkillTrackerComponent {
  skillGoals = [{ title: 'abc', progress: '20%' }];
  addGoal() {}
}
