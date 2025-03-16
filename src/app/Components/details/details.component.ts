import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor ( private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService  ,private _CartService:CartService , private _ToastrService:ToastrService , private _Renderer2:Renderer2 ){}

  productId!:string|null;
  productDetails:any = null ;

  ngOnInit(): void {
    

    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       this.productId = params.get('id')
  
      }
    })


    this._ProductsService.getSpecificProduct(this.productId).subscribe({
      next:({data})=>{
        // console.log(data)
        this.productDetails = data ;
      }
    })


  }


  detailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }


  // addProductToCart function ()

  addProductToCart(id:string , element:HTMLButtonElement){

    this._Renderer2.setAttribute(element , 'disabled' , 'true')

    this._CartService.addProductCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message , response.status );
        this._Renderer2.removeAttribute(element , 'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems)

      }
    })

  }

}
