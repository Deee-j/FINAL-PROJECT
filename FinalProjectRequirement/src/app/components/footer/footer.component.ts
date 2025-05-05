import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,PolicyComponent,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
