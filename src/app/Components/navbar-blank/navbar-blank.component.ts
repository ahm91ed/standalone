import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from 'src/app/Core/Services/authentication.service';
import { CartService } from 'src/app/Core/Services/cart.service';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent  implements OnInit{
  constructor ( private _AuthenticationService:AuthenticationService ,
     private _Router:Router ,
     private _CartService:CartService ,
     private _WishlistService:WishlistService,
    private _Renderer2:Renderer2) {}


     @ViewChild ('navBar')  navElement!:ElementRef;




     @HostListener ('window:scroll')
     onScroll():void{

      if(scrollY > 500 ){
        this._Renderer2.addClass(this.navElement.nativeElement , 'shadow');
        this._Renderer2.addClass(this.navElement.nativeElement , 'px-5');
      }

      else{
        this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow');
        this._Renderer2.removeClass(this.navElement.nativeElement , 'px-5');
      }
     }


  cartNumberNavbar:number = 0 ;
  userName:any = null  ;

  ngOnInit(): void {
    this.userName =  this._AuthenticationService.tokenAfterDecoding;

    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartNumberNavbar = data ;
      }
    })

    this._CartService.getUserCart().subscribe({
      next:(response)=>{

        console.log(response)

        this.cartNumberNavbar = response.numOfCartItems ;
      }
    })


    





     
  }


  logOut():void{

    this._AuthenticationService.signOut() ;
    this._Router.navigate (['/login'] ) ;
  }

}
