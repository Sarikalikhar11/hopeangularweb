import { Component } from '@angular/core';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css'],
})
export class DonationFormComponent {
  showForm: boolean = true;
  
  toggleForm() {
    this.showForm = !this.showForm;
  }
}
