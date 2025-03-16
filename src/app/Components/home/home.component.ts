import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from 'src/app/Core/Intrfaces/products';
import { CuttextPipe } from 'src/app/Core/Pipes/cuttext.pipe';
import { Category } from 'src/app/Core/Intrfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/Core/Pipes/search.pipe';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , RouterLink , CarouselModule  , CuttextPipe , SearchPipe   , FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (
    private _ProductsService:ProductsService ,
    private _CartService:CartService ,
    private _Renderer2:Renderer2 ,
    private _ToastrService: ToastrService ,
    private _WishlistService:WishlistService ){}


  // All variables

  searchTerm:string = "";
  products:Products[] = [];

  categories:Category[] = [];
  itemsInPage:number = 0 ;
  currentPage:number = 1 ;
  total:number = 0 ;

  wishlistData:string[] = [];

  ngOnInit(): void {

    // getProducts function
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{
        
        this.products = response.data ;
        this.itemsInPage = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;
      },
    }) 


     // getCategories function
    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data ;
      }
    })


    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
        // console.log(response)

        const newData = response.data.map( (prodId:any)=> prodId._id );
        // console.log(newData)
        this.wishlistData = newData ;
      }
    })

  }


  // CarouselModule
  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }





  // addToCart function

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
        this._ToastrService.success( response.status ,response.message);
        this.wishlistData = response.data

      }
    })
  }


 












}
