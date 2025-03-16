import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor ( private _ProductsService:ProductsService ){}

  allCategories:any[]=[];

  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.allCategories = response.data;
      }
    })
  }
}
