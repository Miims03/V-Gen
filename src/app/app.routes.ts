import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GuardService } from './services/guard.service';

export const routes: Routes = [
    {path: "" , component: HomeComponent},
    {path:"login" , component: LoginComponent},
    {path:"signup" , component: SignupComponent},
    {path:'profile' , component: ProfileComponent, canActivate: [GuardService]},
    {path: "**", redirectTo: "/"}
];
