// app-routing.module.ts or routing configuration file
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent }, // Default to dashboard // Manage users
  ]},
  // Other routes go here, like Home, About, etc.
];

@NgModule({
  declarations:[
    AdminComponent,
    NavComponent,
  ],
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
