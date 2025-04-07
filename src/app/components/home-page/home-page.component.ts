import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  imports: [OrganizationChartModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  inputData:any;
  outputData: TreeNode[] = [];
  selectedNode: TreeNode = {};

  constructor(private location: Location,private router: Router,private authService: AuthService){
    this.inputData = this.location.getState();
  }

  ngOnInit(): void {
    let input = this.inputData;
    let output: TreeNode[] = []; 
    this.outputData = this.transformData([input], output);
  }

  transformData(input:any[], output:TreeNode[]): TreeNode[]{
    for(let i=0; i<input.length; i++){
      output[i] = {
        label: input[i].phoneNo,
        styleClass: "p-person",
        type: "person",
        expanded: true,
        data: {
          name: input[i].fullName, 
          referral: input[i].referralCode, 
          phoneNo: input[i].phoneNo, 
          level: input[i].levelAchived, 
        },
        children: input[i].subordinates.length != 0 ? this.transformData(input[i].subordinates, [output[i]]): undefined
      }
    }
    return output;
  }

  logout(){
    this.authService.logout();
    this.outputData = [];
    this.router.navigateByUrl("/");
  }
}
