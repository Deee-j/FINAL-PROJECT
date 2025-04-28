import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FeedbackComponent } from './components/feedback/feedback.component';
=======
<<<<<<< HEAD
import { FeedbackComponent } from './components/feedback/feedback.component';
=======
import { FeedBackComponent } from './components/feedback/feedback.component';

>>>>>>> Jimenez_branch

>>>>>>> 6a2d8cc882936fb46b2faa8716dba6b5f09c74b8
=======
import { FeedBackComponent } from './components/feedback/feedback.component';

>>>>>>> f8219daaa23f6b99945765cd1b06fcc5b65b4677
export const routes: Routes = [
    {title: "ADS | Home", path:'' , component: HeaderComponent},
    {title: "ADS | Home", path:'home' , component: HeaderComponent},
    {title: "ADS | About", path:'about' , component: AboutComponent},
    {title: "ADS | Gallery", path:'gallery' , component: GalleryComponent},
<<<<<<< HEAD
<<<<<<< HEAD
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent},
    {title: "ADS | Feedback", path:'feedback',component: FeedbackComponent}
=======
<<<<<<< HEAD
    {title: "ADS | Feedback", path:'feedback', component:FeedbackComponent},
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent}
    
=======
    {title: "ADS | FeedBack", path:'feedback' , component: FeedBackComponent},
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent}
    
>>>>>>> 6a2d8cc882936fb46b2faa8716dba6b5f09c74b8

>>>>>>> Jimenez_branch
=======
    {title: "ADS | Feedback", path:'feedback', component:FeedBackComponent},
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent}
>>>>>>> f8219daaa23f6b99945765cd1b06fcc5b65b4677
];