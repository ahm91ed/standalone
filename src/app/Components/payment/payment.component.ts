import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor ( private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}

  cartId:string|null = '' ;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{

        console.log(params.get('id')) ;

       this.cartId = params.get('id')
      }
    })
  }


  paymentForm:FormGroup = new FormGroup({

    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),

  })


  handlePaymentForm(form:FormGroup):void{

    // console.log(form.value);
    this._CartService.checkoutSession(this.cartId ,form.value ).subscribe({
      next:(response)=>{
        // console.log(response);
        if ( response.status == 'success'){

         window.open( response.session.url ,) 
        }

      }
    })
  }















}
