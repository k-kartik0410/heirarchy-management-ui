import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  inputData:any;
  outputData:any;

  constructor(private location: Location){
    this.inputData = this.location.getState();
  }

  ngOnInit(): void {
    console.log(this.inputData);
  }

 

}
