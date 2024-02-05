// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role: any;
  id:any;
  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('userRole');
    this.id = sessionStorage.getItem('userId')

    console.log()
  }

  destroy() {
    this.authService.logout();
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
