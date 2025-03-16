import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from 'src/app/Core/Intrfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/Core/Pipes/cuttext.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe , NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor ( private _ProductsService:ProductsService ,
     private _CartService:CartService ,
      private _ToastrService:ToastrService,
    private _WishlistService:WishlistService
   ){}

  allPoducts:Products[]= [];
  itemsInPage:number = 0;
  currentPage:number = 1 ;
  total:number = 0 ;
  wishlistData:string[] = [];


  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{

        // console.log(response);
        // console.log(response.data);
        this.allPoducts = response.data;
        this.itemsInPage = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;

      }
    })
  }


  addProductToCart(id:string){
    this._CartService.addProductCart(id).subscribe({
      next:(response)=>{

        // console.log(response);
        this._ToastrService.success( response.message , response.status);
        this._CartService.cartNumber.next(response.numOfCartItems)
      }
    })
  }


  pageChanged(event:any):void{

    // console.log(event)
    this._ProductsService.getProducts(event).subscribe({
      next:(response)=>{

        // console.log(response);
        // console.log(response.data);
        this.allPoducts = response.data;
        this.itemsInPage = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;

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
        this._ToastrService.success( response.status ,response.message);
        this.wishlistData = response.data

      }
    })
  }


}
