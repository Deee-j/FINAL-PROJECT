import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [

    {title: "ADS | Home", path:'' , component: HeaderComponent},
    {title: "ADS | Home", path:'home' , component: HeaderComponent},
    {title: "ADS | About", path:'about' , component: AboutComponent},
    {title: "ADS | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "ADS | Feedback", path:'feedback', component:FeedbackComponent},
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent}
    
];