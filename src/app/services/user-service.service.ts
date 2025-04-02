import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient ) { }

  private apiHostUrl:string = environment.apiUrl;

  registrUser(userData:any): Observable<any>{
    return this.httpClient.post(this.apiHostUrl+'/user/register', userData)
  }

  loginuser(phoneNo:string): Observable<any>{
    return this.httpClient.get(this.apiHostUrl+"/user/"+phoneNo);
  }

}
