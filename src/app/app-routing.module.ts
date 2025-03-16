import { authGuard } from './Core/Guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' ,
    canActivate:[authGuard],
     loadComponent:()=> import( './layouts/blank-layout/blank-layout.component' ).then( (m)=>m.BlankLayoutComponent  ) ,
    children: [
      {path:'' , redirectTo:'home' , pathMatch: 'full' } ,
      {path: 'home' ,
      loadComponent:()=> import('./Components/home/home.component').then( (m)=>m.HomeComponent   ) ,
      title:'home' } ,

      {path: 'payment/:id' ,
       loadComponent:()=> import('./Components/payment/payment.component').then( (m)=>m.PaymentComponent   ),
      title:'payment' } ,

      {path: 'allorders' ,
        loadComponent:()=> import('./Components/allorders/allorders.component').then( (m)=>m.AllordersComponent   ),
       title:'allorders' } ,


      {path: 'categories' ,
      loadComponent:()=> import('./Components/categories/categories.component').then( (m)=>m.CategoriesComponent  ) ,
      title:'Categories'  } ,

      {path: 'category-detail/:id' ,
        loadComponent:()=> import('./Components/category-details/category-details.component').then( (m)=>m.CategoryDetailsComponent  ) ,
        title:'CategoryDetails'  } ,

      {path: 'cart' ,
      loadComponent:()=> import('./Components/cart/cart.component').then( (m)=>m.CartComponent   )  ,
      title:'Cart' } ,

      {path: 'wishlist' ,
        loadComponent:()=> import('./Components/wishlist/wishlist.component').then( (m)=>m.WishlistComponent   )  ,
        title:'wishlist' } ,
  

      {path: 'brands' ,
      loadComponent:()=> import('./Components/brands/brands.component').then( (m)=>m.BrandsComponent   ) ,
      title:'Brands'   } ,

      {
        path: 'brand-detail/:id' ,
        loadComponent:()=> import ('./Components/brand-detail/brand-detail.component').then( (m)=>m.BrandDetailComponent ),
        title:'brand-detail'},

      {path: 'products' ,
      loadComponent:()=> import('./Components/products/products.component').then( (m)=>m.ProductsComponent   ) ,
      title:'Products'  } ,

      {path:'details/:id' ,
      loadComponent:()=> import ('./Components/details/details.component').then(  (m)=>m.DetailsComponent  ) ,
      title:'details'  }
    ]
    } ,

  {path: '' , loadComponent:()=> import('./layouts/authentication-layout/authentication-layout.component').then( (m)=>m.AuthenticationLayoutComponent   ) ,
    children:[
      {path:'' , redirectTo:'login' , pathMatch: 'full' } ,
      {path: 'login' , loadComponent:()=>import('./Components/login/login.component').then(  (m)=>m.LoginComponent  ) , title:'login'  },
      {path: 'register' , loadComponent:()=>import('./Components/register/register.component').then(  (m)=>m.RegisterComponent  ) , title:'register'  },
      {path: 'forgotpassword' ,
        loadComponent:()=> import('./Components/forgotpassword/forgotpassword.component').then( (m)=>m.ForgotpasswordComponent   )  ,
        title:'forgot password' } ,              
    ]
   } ,

   {path:'**' , loadComponent:()=>import( './Components/notfound/notfound.component' ).then( (m)=>m.NotfoundComponent ) , title:'404notfound'       }








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
