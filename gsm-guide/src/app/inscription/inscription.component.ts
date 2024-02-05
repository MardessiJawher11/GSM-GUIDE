// inscription.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  email: string = '';
  emailAvailable: boolean | null = null;
  user: User = new User('', new Date(), '', '', '', '', '', '', '');
  confirmPassword: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    if (
      this.user.name &&
      this.user.lastName &&
      this.user.dateNaissance &&
      this.user.sexe &&
      this.user.tel &&
      this.user.email &&
      this.user.password&&
      this.confirmPassword &&
      this.user.password === this.confirmPassword
    )

    {
      this.userService.createUser(this.user).subscribe(
        (response) => {
          console.log('Utilisateur inscrit', response);
          alert('Registration Successful!.');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Erreur d\'inscription :', error);
          console.log('erreur');
        }
      );
    } else {
      alert('Please replace all form fields and make sure the passwords match.');
    }
  }
}
