import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../authservice';  // Make sure the correct path to your AuthService

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,SearchComponent],
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
