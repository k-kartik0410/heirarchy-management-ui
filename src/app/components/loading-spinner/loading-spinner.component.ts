import { Component } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  imports: [AsyncPipe],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {

  showLoader: Observable<boolean>;

  constructor(private loading:LoadingSpinnerService){
    this.showLoader = this.loading.loader;
  }


  
}
