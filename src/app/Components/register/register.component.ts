import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup , ReactiveFormsModule, Validators, FormControlOptions } from '@angular/forms';
import { AuthenticationService } from 'src/app/Core/Services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , RouterLink ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor ( private _AuthenticationService:AuthenticationService  , private _Router:Router   ) { }



    // === All variables ===

    
    errMsg:string = '' ;
    registerSpinner:boolean = false ;
    navigateLogin:boolean = false ;




  // === registerForm ===

  registerForm:FormGroup = new FormGroup({


    name:new FormControl( '' , [ Validators.required , Validators.minLength(3) , Validators.maxLength(20)  ]   ),
    email: new FormControl( '' , [ Validators.required , Validators.email  ]           ),
    password:new FormControl( '' , [ Validators.required , Validators.pattern ( /^[A-Za-z0-9]{9,}$/ )  ]           ),
    rePassword: new FormControl( '' , ),
    phone: new FormControl ( '' ,  [ Validators.required , Validators.pattern ( /^01[0125][0-9]{8}$/ )  ]  )



  }  ,  {validators: [this.confirmPassword]}      as FormControlOptions           ) ;




 // == confirmPassword function ==


  confirmPassword( form:FormGroup ):void
  {
   const password =  form.get('password') ;
   const rePassword =  form.get('rePassword') ;

   if ( rePassword?.value == null || rePassword?.value == '' ){
    rePassword?.setErrors( { required : true } )
   }

   else if ( password?.value != rePassword?.value ){
    rePassword?.setErrors( { mismatch : true } )
   }


  }



 // == handleRegister function ==

  handleRegister( form:FormGroup ):void{

    if ( form.valid ){

      this.registerSpinner = true ;


      this._AuthenticationService.signUp(form.value).subscribe({

        next: (data)=>{
          if ( data.message == 'success' ){
            this.registerSpinner = false ;
            this._Router.navigate( ['/login' ] );
          }

        },

        error:(err: HttpErrorResponse)=>{
          this.errMsg = err.error.message ;
          this.navigateLogin = true ;
          this.registerSpinner = false ;
        }
          
          


      })

    }

    else{
      this.registerForm.markAllAsTouched()
    }

  }





}
