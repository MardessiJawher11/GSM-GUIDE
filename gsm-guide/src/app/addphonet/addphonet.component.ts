import { Phonet } from './../models/phonet';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PhonetService } from '../services/phonet.service';

@Component({
  selector: 'app-addphonet',
  templateUrl: './addphonet.component.html',
  styleUrls: ['./addphonet.component.css']
})
export class AddphonetComponent implements OnInit {
  phonet: Phonet = new Phonet('', '', '', '', '', '', '');
  constructor(private phonetService: PhonetService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    if (
      this.phonet.name &&
      this.phonet.lastName &&
      this.phonet.etat &&
      this.phonet.panne &&
      this.phonet.tel &&
      this.phonet.model
     )
     {
      this.phonetService.createPhonet(this.phonet).subscribe(
        (response) => {
          console.log('Utilisateur inscrit', response);
          alert('Registration Successful!.');
          this.router.navigate(['/allphones']);
        },
        (error) => {
          console.error('Erreur d\'inscription :', error);
          console.log('erreur');
        }
      );
    } else {
      alert('Please replace all form fields ');
    }
  }
}
