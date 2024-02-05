import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

id:any;
user: User = new User('', new Date(), '', '', '', '', '', '', '');

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { }

  navigateToUpdateProfile(user: User) {
    this.router.navigate(['/updateprofil', user.id]);
  }
  ngOnInit(): void {
    this.id = sessionStorage.getItem('userId')
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).subscribe(
        (userData: User) => {
          this.user = userData;
        },
        (error) => {
          console.error('Error fetching user details:', error);        }
      );
    });
  }
}
