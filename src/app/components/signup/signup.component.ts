import { Component, ViewChild } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserModel } from '../../models/UserModel';
import { FormsModule } from '@angular/forms';
import { MessagePopupComponent } from '../message-popup/message-popup.component';
import { MessagePopupService } from '../message-popup/message-popup.service';
import { LoadingSpinnerService } from '../loading-spinner/loading-spinner.service';

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
  
  registerUser(registrationForm: any){

    this.loader.openLoader();
    
    let user = new UserModel(
      registrationForm.value.fullName, registrationForm.value.phoneNo, registrationForm.value.referralCode
    );
    
    this.userService.registrUser(user).subscribe(
      response => {
        this.messagePopUpService.openPopUp("Success","Registration Success");
      },
      error => {
        this.messagePopUpService.openPopUp("Failure","Something went wrong");
        this.loader.closeLoader();
      },
      () =>{
        registrationForm.form.reset();
        this.loader.closeLoader();
      }
    );
  }

}
