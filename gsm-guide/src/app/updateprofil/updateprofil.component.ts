import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent implements OnInit {
  id: any;
  user: User = new User('', new Date(), '', '', '', '', '', '', '');
  formGroup!: FormGroup;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('userId');
    this.userService.getUserById(this.id).subscribe(
      (userData: User) => {
        this.user = userData;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  updateProfile(form: NgForm) {
    if (
      this.user.name &&
      this.user.lastName &&
      this.user.dateNaissance &&
      this.user.sexe &&
      this.user.tel &&
      this.user.email &&
      this.user.password
    ){
    const updatedUserData: Partial<User> = {
      name: form.value.name,
      lastName: form.value.lastName,
      email: form.value.email,
      tel: form.value.tel,
      password:form.value.password,
      dateNaissance:form.value.dateNaissance,
      sexe:form.value.sexe,
      role:this.user.role
    };

    this.userService.updateUserDetails(this.id, updatedUserData).subscribe(
      (updatedUser: User) => {
        alert('Profile updated successfully');
        // Optionally, you can update the user object in the component
        this.user = updatedUser;
        // Redirect or perform any other action after successful update
        this.router.navigate(['/profil', this.id]);
      },
      (error) => {
        console.error('Error updating profile:', error);
        alert('Error updating profile. Please try again.');
      }
    );
  }
  else {
    alert('Please replace all form fields.');
  }
}
}
