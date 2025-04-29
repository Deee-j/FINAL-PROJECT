import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
