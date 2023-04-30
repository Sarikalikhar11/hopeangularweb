import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactForm: any = this.fb.group({
    fullname: [''],
    email: [''],
    contact: [''],
    message: [''],
  });

  preview: string = '';
  ngOnInit(): void {}

  save() {
    this.preview = JSON.stringify(this.contactForm.value);
  }
}
