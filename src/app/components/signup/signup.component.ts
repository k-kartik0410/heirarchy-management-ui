import { Component, ViewChild } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserModel } from '../../models/UserModel';
import { FormsModule } from '@angular/forms';
import { MessagePopupService } from '../message-popup/message-popup.service';
import { LoadingSpinnerService } from '../loading-spinner/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  private userService = inject(UserServiceService);
  private messagePopUpService = inject(MessagePopupService);
  private loader = inject(LoadingSpinnerService);

  constructor(private router: Router){}

  phoneNo:string = "";
  
  registerUser(registrationForm: any){

    this.loader.openLoader();
    
    let user = new UserModel(
      registrationForm.value.fullName, registrationForm.value.phoneNo, registrationForm.value.referralCode
    );
    
    this.userService.registrUser(user).subscribe({
      next: (response) =>{
        this.messagePopUpService.openPopUp("Success","Registration Success");
      },
      error: (err) =>{
        this.messagePopUpService.openPopUp("Failure","Something went wrong");
        this.loader.closeLoader();
      },
      complete: () => {
        registrationForm.form.reset();
        this.loader.closeLoader();
      }
    });
  }

  login(){
    this.loader.openLoader();
    this.userService.loginuser(this.phoneNo).subscribe({
      next: (response) =>{
        this.loader.closeLoader();
        this.router.navigateByUrl("/home", {state: response});
      },
      error: (err) =>{
        this.loader.closeLoader();
      },
      complete:() =>{
        this.phoneNo = "";
        this.loader.closeLoader();
      }
    })
  }

}
