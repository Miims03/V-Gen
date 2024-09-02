import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GuardService } from './services/guard.service';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: "" , component: HomeComponent},
    {path:"login" , component: LoginComponent},
    {path:"signup" , component: SignupComponent},
    {path:'profile' , component: ProfileComponent, canActivate: [GuardService]},
    {path: "**", redirectTo: "/"}
];
