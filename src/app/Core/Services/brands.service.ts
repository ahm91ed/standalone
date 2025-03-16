import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }

  apiUrl:any = 'https://ecommerce.routemisr.com/api/v1/' ;

  getAllBrands():Observable<any>
  {
    return this._HttpClient.get( this.apiUrl + `brands`)

  }

  getspecificBrand(id:string|null):Observable<any>
  {
    return this._HttpClient.get( this.apiUrl + `brands/${id}`)

  }
}
