import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarBlankComponent } from 'src/app/Components/navbar-blank/navbar-blank.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule ,NavbarBlankComponent  , RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {

  arrowUp():void{

    window.scrollTo( 0, 0 )
  }

}
