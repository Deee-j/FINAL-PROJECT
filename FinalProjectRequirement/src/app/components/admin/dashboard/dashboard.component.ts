import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../../gallery/gallery.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,GalleryComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
