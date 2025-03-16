import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/Core/Services/cart.service';
import { CuttextPipe } from 'src/app/Core/Pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor ( private _CartService:CartService , private _Renderer2:Renderer2 ) { }

  cartData:any = null ;

 

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log (response)

        this.cartData = response.data ;
      }
    })
  }



  removeCartItem(id:string , element:HTMLButtonElement):void{

    this._Renderer2.setAttribute ( element , 'disabled' , 'true' )

    this._CartService.removeSpecificCartItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cartData = response.data ;
        this._Renderer2.removeAttribute( element , 'disabled' , 'true' );
        this._CartService.cartNumber.next(response.numOfCartItems)

      }
    })
  }


  changeCount( count:number , id:string , elemnt1:HTMLButtonElement , elemnt2:HTMLButtonElement ):void{

 
    if ( count >= 1 ){

      this._Renderer2.setAttribute(elemnt1 , 'disabled' , 'true') ;
      this._Renderer2.setAttribute(elemnt2 , 'disabled' , 'true') ;

      this._CartService.updateCartProduct(count , id).subscribe({

        next:(response)=>{
          console.log(response)
          this.cartData = response.data ;

          this._Renderer2.removeAttribute(elemnt1 , 'disabled' , 'true') ;
          this._Renderer2.removeAttribute(elemnt2 , 'disabled' , 'true') ;
        }
      })
    }

  }


  clearCart():void{
    this._CartService.clearUserCart().subscribe({

      next:(response)=>{
        console.log(response)
        if ( response.message == 'success' ){

          this.cartData = null ;
          this._CartService.cartNumber.next(0)
        }

      }
    })
  }



}
