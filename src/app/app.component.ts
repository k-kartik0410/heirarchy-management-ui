import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupComponent, MessagePopupComponent, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'heirarchy-management-system';
}
