import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { FeedBackComponent} from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    NavComponent,
    AboutComponent,
    FeedbackComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    NotfoundComponent,
    FormsModule
  ],
=======
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,NavComponent,AboutComponent,FeedBackComponent,FooterComponent,GalleryComponent,HeaderComponent,NotfoundComponent],
>>>>>>> Jimenez_branch
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProjectRequirement';
}
