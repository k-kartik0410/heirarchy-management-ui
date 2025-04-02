import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "",
        component: SignupComponent
    },
    // {
    //     path: "",
    //     redirectTo: "/signup",
    //     pathMatch: "full",
    // }
];
