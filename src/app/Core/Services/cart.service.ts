import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _HttpClient:HttpClient) { }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0) ;

  apiUrl:string = 'https://ecommerce.routemisr.com/api/v1/' ;

  
 


  // addProductCart function 
  addProductCart(cartId:string):Observable<any>
  {
    return this._HttpClient.post( this.apiUrl + `cart` , { productId : cartId } )
  }

    // getUserCart function 

    getUserCart():Observable<any>
    {
      return this._HttpClient.get( this.apiUrl + `cart` )
    }


    // removeSpecificCartItem function 
    removeSpecificCartItem(id:string):Observable<any>
    {
      return this._HttpClient.delete( this.apiUrl +  `cart/${id}`)
    }


    // updateCartProduct function 
    updateCartProduct( productCount:number , productId:string ):Observable<any>
    {

     return this._HttpClient.put (this.apiUrl + `cart/${productId}` , {count: productCount} )

    }


    // clearUserCart function 
    clearUserCart():Observable<any>
    {
      return this._HttpClient.delete( this.apiUrl + `cart`)
    }


    // checkoutSession function
    checkoutSession(id:string|null , orderInfo:object):Observable<any>
    {
      return this._HttpClient.post( this.apiUrl +`orders/checkout-session/${id}?url=http://localhost:4200`, orderInfo)

    }













}
