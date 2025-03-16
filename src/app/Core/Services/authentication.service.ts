import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../Intrfaces/auth';
import { jwtDecode } from 'jwt-decode';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient ) {}


  apiUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/` ;

  tokenAfterDecoding:any = {} ; 





  // === signUp function ===

  signUp( userData:Auth  ):Observable<any>
  
  {
   return this._HttpClient.post( this.apiUrl + 'signup' , userData )
  }

  // === signIn function ===

  signIn( userData:Auth): Observable<any>
  
  {
    return this._HttpClient.post ( this.apiUrl + `signin` , userData )

  }

  // === decodeUserToken function to decode token ===

  decodeUserToken():void{


   let encodeToken =  localStorage.getItem('eToken') ;

   if ( encodeToken != null ){

    let decodeToken= jwtDecode(encodeToken) ;

    this.tokenAfterDecoding = decodeToken ;

    // console.log (decodeToken )


   }



  }

    // === signOut function to remove local storage ===
  signOut():void{

    localStorage.removeItem('eToken') ;
    
  }








  

}
