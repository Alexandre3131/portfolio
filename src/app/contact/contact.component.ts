import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name: string = '';
  last_name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  isSent: boolean = false;
  isLoading: boolean = false;
  error: boolean = false;

  sendEmail() {
    this.isLoading=true;

    const templateParams = {
      from_name: this.name,
      from_last_name: this.last_name,
      from_email: this.email,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send(
        'service_tkx01b9',
        'template_suufv0k',
        templateParams,
        'NKmmDveLfsp7WB6Tz'
      )
      .then(
        () => {
          this.isSent = true;
          this.name = '';
          this.last_name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
          this.isLoading=false;
        },
        () => {
          this.error = true;
        }
      );
  }
}
