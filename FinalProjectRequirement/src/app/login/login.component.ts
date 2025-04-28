// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // For demo, let's just check if the username is "admin" and password is "admin123"
    if (this.username === 'admin' && this.password === 'admin123') {
      // Set the isAdmin flag in localStorage
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin']);  // Redirect to admin page
    } else {
      alert('Invalid login credentials!');
    }
  }
}
