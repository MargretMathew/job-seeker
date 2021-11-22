import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardemployerComponent } from './pages/dashboardemployer/dashboardemployer.component';
import { SignupemployerComponent } from './pages/signupemployer/signupemployer.component';
import { ViewemployerComponent } from './pages/viewemployer/viewemployer.component'
import { LogoutComponent } from './pages/logout/logout.component'

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'jobs',
    component:DashboardComponent
  },
  {
    path:'employer',
    component:DashboardemployerComponent
  },
  {
    path:"new-company",
    component:SignupemployerComponent
  },
  {
    path:"view-applied",
    component:ViewemployerComponent
  },
  {
    path:"logout",
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
