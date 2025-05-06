import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeedBackComponent } from './components/feedback/feedback.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AdminGuard } from './components/admin/admin.guard';
import { PolicyComponent } from './components/footer/policy/policy.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to 'home'
  { title: 'ADS | Home', path: 'home', component: HeaderComponent },
  { title: 'ADS | About', path: 'about', component: AboutComponent },
  { title: 'ADS | Gallery', path: 'gallery', component: GalleryComponent },
  { title: 'ADS | Feedback', path: 'feedback', component: FeedBackComponent },
  { title: 'ADS | Policy', path: 'policy', component: PolicyComponent },
  {
    title: 'ADS |Admin', path: 'admin', canActivate: [AdminGuard], component: AdminComponent, 
    children: [
      { title: 'Admin | Dashboard', path: 'dashboard', component: DashboardComponent },
      { title: 'Admin | Manage Users', path: 'users', component: UsersComponent },
    ],
  },


  { title: 'ADS | Not Found', path: '**', component: NotfoundComponent },
];
