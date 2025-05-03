import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    NgIf,
    NgFor,
    MatInputModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  projects = [{ name: 'Angular' }];
  resumeName: string = '';

  addProject() {}

  uploadResume(e: any) {}

  connectGitHub() {}

  updateProfile() {}
}
