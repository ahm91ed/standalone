import { CartService } from './../../Core/Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';
import { Products } from 'src/app/Core/Intrfaces/products';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/Core/Pipes/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor (
  private _WishlistService:WishlistService,
  private _ToastrService:ToastrService,
  private _CartService:CartService){}




  products:Products[] = [];

  wishlistData:string[] = [] ;

  ngOnInit(): void {
    
   this._WishlistService.getWishlist().subscribe({
    next:(response)=>{
      console.log(response);
      this.products = response.data;

      const newData = response.data.map( (prodId:any)=> prodId._id );
      this.wishlistData = newData ;
    }
   })

   
    
  }

  addToCart(id:string):void{


    this._CartService.addProductCart(id).subscribe({
      next: (response)=>{
        console.log(response) ;
        
        this._ToastrService.success(response.message , response.status) ;
        this._CartService.cartNumber.next( response.numOfCartItems )

      }
    })
  }



  
  addToWishlist(id:string):void{

    this._WishlistService.addWishlist(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success( response.message , response.status  );
        this.wishlistData = response.data
      }
    })
  }


 


  removeFromWishlist(id:string){

    this._WishlistService.removeWishlist(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success( response.status , response.message);
        this.wishlistData = response.data;


        this._WishlistService.getWishlist().subscribe({
          next:(response)=>{
            this.products = response.data;

          }
        })


      }
    })

    
   
  }







}
