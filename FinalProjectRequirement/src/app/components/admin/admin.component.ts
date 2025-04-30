// admin.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from '../nav/nav.component'; // NavComponent path
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NavComponent,RouterOutlet],  // Include NavComponent here
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {}
