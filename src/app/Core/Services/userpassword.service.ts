import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserpasswordService {
  constructor( private _HttpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/` ;

  forgotPassword(userMail:object):Observable<any>
  {
    return this._HttpClient.post( this.baseUrl + `forgotPasswords` , userMail)
  }

  verifyResetCode(usercode:object):Observable<any>
  {
    return this._HttpClient.post( this.baseUrl + `verifyResetCode` , usercode)
  }

  resetPassword(userData:object):Observable<any>
  {
    return this._HttpClient.put( this.baseUrl + `resetPassword` , userData)
  }

}
