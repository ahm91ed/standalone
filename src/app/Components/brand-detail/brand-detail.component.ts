import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/Core/Services/brands.service';

@Component({
  selector: 'app-brand-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  constructor (private _ActivatedRoute:ActivatedRoute , private _BrandsService:BrandsService ){}

  brandId:string|null = '';
  brandData:any = null ;

  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        // console.log(params);
        this.brandId = params.get('id')
        console.log(params.get('id'));
      }
    })



    this._BrandsService.getspecificBrand(this.brandId).subscribe({

      next:(response)=>{
        // console.log(response);
        // console.log(response.data);
        this.brandData = response.data ;
      }

    })






  }

}
