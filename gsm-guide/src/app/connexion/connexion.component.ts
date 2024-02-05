// connexion.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public userservice: UserService, public router: Router,
    public activatedroute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
  }

  verifier(formlog: NgForm) {
    const email = formlog.value['email'];
    const password = formlog.value['password'];

    const user = {
      email: email,
      password: password
    };

    this.userservice.connexion(user).subscribe(
      (userData: User) => {
        alert('Connexion avec succès');

        sessionStorage.setItem('userRole', userData.role);
        sessionStorage.setItem('userId', userData.id);
        this.authService.login();
        this.router.navigate(['/track']);
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur de connexion:', error);
        alert('Erreur de connexion. Vérifiez vos données.');
      }
    );
  }
}
