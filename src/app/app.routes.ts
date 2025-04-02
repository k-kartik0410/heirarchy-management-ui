import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "",
        redirectTo: "/signup",
        pathMatch: "full",
    }
];
