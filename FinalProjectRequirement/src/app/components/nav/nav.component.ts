import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
=======
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../authservice';  // Make sure the correct path to your AuthService
>>>>>>> 52f23ed2d8f627c36a2f09f28035d06bd69d52de

@Component({
  selector: 'app-nav',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink,RouterLinkActive,RouterOutlet,SearchComponent],
=======
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
>>>>>>> 52f23ed2d8f627c36a2f09f28035d06bd69d52de
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']  // Fixed typo: use styleUrls, not styleUrl
})
export class NavComponent {
  constructor(public authService: AuthService) {}

  // Check if the user is an admin
  isAdmin(): boolean {
    return this.authService.isAdmin();  // This returns true or false based on user role

  }
}
