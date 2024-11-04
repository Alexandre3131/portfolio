import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name: string = '';
  last_name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  sendEmail() {
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
        (response) => {
          console.log(
            'Email envoyé!',
            response.status,
            response.text
          );
          alert('Votre message a été envoyé avec succès !');
        },
        (error) => {
          console.error('Echec de l\'envoi du email', error);
          alert("Échec de l'envoi du message. Veuillez réessayer.");
        }
      );
  }
}
