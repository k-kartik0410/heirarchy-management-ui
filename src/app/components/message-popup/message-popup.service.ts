import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagePopupService {

  private showPopupSubject = new BehaviorSubject<boolean>(false);
  private messageHead = new BehaviorSubject<string>("");
  private messageBody = new BehaviorSubject<string>("");

  popup = this.showPopupSubject.asObservable();
  mHead = this.messageHead.asObservable();
  mbody = this.messageBody.asObservable();

  openPopUp(messageHead:string, messageBody:string){
    this.messageHead.next(messageHead);
    this.messageBody.next(messageBody);
    this.showPopupSubject.next(true);
  }

  closePopUp(){
    this.showPopupSubject.next(false);
    this.messageHead.next("");
    this.messageBody.next("");
  }

  constructor() { }
}
