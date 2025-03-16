import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  
  apiUrl:string = 'https://ecommerce.routemisr.com/api/v1/';

  addWishlist(prodId:string):Observable<any>
  {
    return this._HttpClient.post( this.apiUrl + `wishlist` , {productId: prodId}    ) 

  }

  getWishlist():Observable<any>
  {
    return this._HttpClient.get( this.apiUrl + `wishlist`) 

  }

  removeWishlist(prodId:string):Observable<any>
  {
    return this._HttpClient.delete( this.apiUrl + `wishlist/${prodId}`     ) 

  }

}
