import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagePopupService } from './message-popup.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-message-popup',
  imports: [AsyncPipe],
  templateUrl: './message-popup.component.html',
  styleUrl: './message-popup.component.scss'
})
export class MessagePopupComponent {

  showPopup: Observable<boolean>;
  messageHead:Observable<string>;
  messageBody:Observable<string>;

  constructor(private messagePopUpService: MessagePopupService){

    this.showPopup = this.messagePopUpService.popup;
    this.messageBody = this.messagePopUpService.mbody;
    this.messageHead = this.messagePopUpService.mHead;

  }

  closePopupDialog(){
    this.messagePopUpService.closePopUp();
  }

}
