import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from 'src/app/Core/Services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor ( private _FormBuilder:FormBuilder , private _AuthenticationService:AuthenticationService , private _Router:Router){}

  errorMessage:string = '' ;
  loginSpinner:boolean = false ;


  loginForm: FormGroup = this._FormBuilder.group({

    email:['' , [Validators.required , Validators.email  ]] ,
    password:['' , [Validators.required , Validators.pattern(/^[A-Za-z0-9]{9,}$/)  ]] 

  }) ;






  handleLogin(form:FormGroup):void{

    if (form.valid){

      this.loginSpinner = true ;

      this._AuthenticationService.signIn(form.value).subscribe({

        next:(response)=>{

          if (response.message == 'success' ){

            // console.log(response);
            this.loginSpinner = false ;
            localStorage.setItem( 'eToken' , response.token ) ;

            this._AuthenticationService.decodeUserToken()

            this._Router.navigate(['/home']) ;
          }
          


        },

        error:(err:HttpErrorResponse)=>{
          console.log(err)
         this.errorMessage = err.error.message ;
         this.loginSpinner = false ;

        }

      })
    }

    else{

      this.loginForm.markAllAsTouched()
    }

  }

}
