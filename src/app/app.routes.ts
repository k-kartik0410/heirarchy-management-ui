import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: SignupComponent
    },
    {
        path: "about-us",
        component: AboutUsComponent
    },
    {
        path: "",
        component: LandingComponent
    },
    // {
    //     path: "",
    //     redirectTo: "/signup",
    //     pathMatch: "full",
    // }
];
