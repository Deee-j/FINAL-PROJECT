import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // <-- Import RouterModule
import { AppComponent } from './app.component';
import { FeedBackComponent } from './components/feedback/feedback.component';
import { AppRoutingModule } from './components/admin/admin.module';
const routes: Routes = [
  { path: '', component: FeedBackComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    // other components...
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes),  // <-- Use RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
