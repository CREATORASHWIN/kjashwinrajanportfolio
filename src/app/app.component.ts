import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment'; // Import environment variables
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewdesignPortfolio';

  email = environment.email;
  phone = environment.phone;
  whatsapp = environment.whatsapp;

  ngOnInit() {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true
    });
  }

  openEmail() {
    window.open(`mailto:${this.email}`, '_self');
  }

  openPhone() {
    window.open(`tel:${this.phone}`, '_self');
  }

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsapp}`, '_blank');
  }
}