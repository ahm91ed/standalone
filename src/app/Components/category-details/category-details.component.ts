import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{

  constructor (private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}

  categoryId:string|null = '' ;
  categoryDetails:any = null ;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        // console.log(params.get('id'));
        this.categoryId = params.get('id')
      }
    })
    

    this._ProductsService.getSpecificCategories(this.categoryId).subscribe({
      next:(response)=>{
        console.log(response);
        this.categoryDetails = response.data
      }
    })


  }






}
