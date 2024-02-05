// track.component.ts
import { Component, OnInit } from '@angular/core';
import { Phonet } from '../models/phonet';
import { PhonetService } from '../services/phonet.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  searchTerm!: string;
  phone!: Phonet;
  isLoggedIn: boolean = false;

  constructor(private phonetService: PhonetService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  searchByTel() {
    if (this.searchTerm) {
      if (!this.isLoggedIn) {
        alert('Please log in.');
        return;
      }
      const tel = parseInt(this.searchTerm, 10);
      this.phonetService.getPhoneByTel(tel).subscribe(
        (data: Phonet) => {
          this.phone = data;
        },
        error => {
          console.error('Error fetching phone details:', error);
          alert("Check your phone number Or Contact Us");
        }
      );
    } else {
      alert("Please enter your phone number");
    }
  }
}
