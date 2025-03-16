import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { UserpasswordService } from 'src/app/Core/Services/userpassword.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , RouterLink],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

constructor ( private _UserpasswordService:UserpasswordService , private _Router:Router){}

step1:boolean = true;
step2:boolean = false;
step3:boolean = false;

email:string = '' ;
userMsg:string = '';

forgotForm:FormGroup = new FormGroup({
  email: new FormControl('' , )
})

verifyCodeForm:FormGroup = new FormGroup({
  resetCode: new FormControl('' , )
})

resetPasswordForm:FormGroup = new FormGroup({
  newPassword:new FormControl('')
})


handleForgotPassword(form:FormGroup):void{

  let Email = this.forgotForm.value;
  this.email = Email.email ;


  this._UserpasswordService.forgotPassword(form.value).subscribe({
    next:(response)=>{
      console.log(response)
      this.userMsg = response.message;
      this.step1= false;
      this.step2 = true ;
    },

    error:(err)=>{
     this.userMsg = err.error.message
    }
  })

}


handleverifyCode(form:FormGroup):void
{
  this._UserpasswordService.verifyResetCode(form.value).subscribe({
    next:(response)=>{
      console.log(response)
      this.userMsg = response.status;
      this.step2 = false;
      this.step3 = true ;
    },

    error:(err)=>{
      this.userMsg = err.error.message;
    }
  })


}


handleResetPassword():void
{

  let resetForm = this.resetPasswordForm.value;
  resetForm.email = this.email ;



  this._UserpasswordService.resetPassword(resetForm).subscribe({
    next:(response)=>{
      console.log(response)
      if ( response.token){
        localStorage.setItem('eToken ', response.token);
        this._Router.navigate(['home'])
        
      }
    },

    error:(err)=>{
     this.userMsg =  err.error.message
     
      
    }
  })

}















}
