import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private loaderVisibleSubject = new BehaviorSubject<boolean>(false);

  loader = this.loaderVisibleSubject.asObservable();

  openLoader(){
    this.loaderVisibleSubject.next(true);
  }

  closeLoader(){
    this.loaderVisibleSubject.next(false);
  }

  constructor() { }
}
