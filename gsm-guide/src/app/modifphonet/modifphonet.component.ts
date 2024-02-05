import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phonet } from '../models/phonet';
import { PhonetService } from '../services/phonet.service';

@Component({
  selector: 'app-modifphonet',
  templateUrl: './modifphonet.component.html',
  styleUrls: ['./modifphonet.component.css']
})
export class ModifphonetComponent implements OnInit {
  phoneId: number | undefined;
  phone: Phonet = new Phonet("","","","","","","");

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private phonetService: PhonetService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.phoneId = +params['id'];
      if (this.phoneId !== undefined) {
        this.phonetService.getPhoneTById(this.phoneId).subscribe(
          (data: Phonet) => {
            this.phone = data;
          },
          (error) => {
            console.error('Error fetching phone details:', error);
          }
        );
      }
    });
  }
  updatePhone() {
    if (this.phoneId !== undefined) {
      this.phonetService.updatePhonetDetails(this.phoneId, this.phone).subscribe(
        (updatedPhone: Phonet) => {
          console.log('Phone details updated successfully:', updatedPhone);
          alert("Phone details updated successfully");
          this.router.navigate(['/allphones']);
        },
        (error) => {
          console.error('Error updating phone details:', error);
        }
      );
    }
  }
}
