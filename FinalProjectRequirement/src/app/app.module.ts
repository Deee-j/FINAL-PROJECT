import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // <-- Import RouterModule
import { AppComponent } from './app.component';
import { FeedBackComponent } from './components/feedback/feedback.component';
const routes: Routes = [
  { path: '', component: FeedBackComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, // Add routes here
  // other routes...
];

@NgModule({
  declarations: [
    AppComponent,
    // other components...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // <-- Use RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
