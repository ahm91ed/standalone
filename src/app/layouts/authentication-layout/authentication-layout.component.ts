import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAuthComponent } from "../../Components/navbar-auth/navbar-auth.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication-layout',
  standalone: true,
  imports: [CommonModule, NavbarAuthComponent , RouterOutlet],
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.css']
})
export class AuthenticationLayoutComponent {

}
