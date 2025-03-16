import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsService } from 'src/app/Core/Services/brands.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _BrandsService:BrandsService){}

  allBrands:any[]=[] ;

ngOnInit(): void {
  
  this._BrandsService.getAllBrands().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.allBrands = response.data;
    }
  })
}


}
