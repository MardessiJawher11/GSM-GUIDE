import { Component, OnInit } from '@angular/core';
import { Phonet } from '../models/phonet';
import { PhonetService } from '../services/phonet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allphonets',
  templateUrl: './allphonets.component.html',
  styleUrls: ['./allphonets.component.css']
})
export class AllphonetsComponent implements OnInit {
  phones: Phonet[] = [];
  constructor(private phonetService: PhonetService,private router: Router ) { }

  ngOnInit(): void {
    this.getAllPhonets();
  }

  getAllPhonets() {
    this.phonetService.getAllPhonets().subscribe(
      (data: Phonet[]) => {
        this.phones = data;
      },
      (error) => {
        console.error('Error fetching phones:', error);
      }
    );
  }
  confirmDelete(userId: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this phone?');

    if (isConfirmed) {
      this.deletePhone(userId);
    }
  }

  navigateToModifyPhone(phone: Phonet) {
    this.router.navigate(['/updatephonet', phone.id]);
  }
  deletePhone(Id: number) {
    this.phonetService.deleteUser(Id).subscribe(
      () => {
        console.log('Phone deleted successfully.');
        this.getAllPhonets();
      },
      (error) => {
        console.error('Error deleting phone:', error);
      }
    );
  }
}
