import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient: HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/` ; 

  // ==== Products function ====.

  getProducts( pageNumber:number = 1 ):Observable<any>
  {
    return this._HttpClient.get (  this.baseUrl + `products?page=${pageNumber}` )

  }

  // ==== specific Product function ====.

  getSpecificProduct(id:string|null):Observable<any>
  {
    return this._HttpClient.get (  this.baseUrl + `products/${id}` )

  }


    // ==== Categories function ====

  getCategories():Observable<any>
  {
    return this._HttpClient.get (  this.baseUrl + `categories` )

  }


  getSpecificCategories(id:string|null):Observable<any>
  {
    return this._HttpClient.get (  this.baseUrl + `categories/${id}` )

  }
}
