import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationService } from '../_services/Presentation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isFirstOpen: boolean = true;
  oneAtATime: boolean = true;
  constructor(private router: Router, private pres: PresentationService) {}

  showSurgicalOutcomes() {
    this.router.navigate(['/soa']);
  }
  showInventory() {
    this.router.navigate(['/ovi']);
  }
  showCardioHelp() {
    this.router.navigate(['/cardiohelp']);
  }
  showWaitingList() {
    this.router.navigate(['/wait']);
  }

  showAbout() {
    this.router.navigate(['/about']);
  }
  showContact() {
    this.router.navigate(['/contact']);
  }
  showPPMPowerpoint() {
      this.pres.getPresenation("ppm").subscribe((next)=>{
      window.open(next);
    })
  }

  showPPM() {
    window.open('http://ppm.surgical-outcomes.nl');
  }

 showOviPPT(){
      this.pres.getPresenation("ovi").subscribe((next)=>{
      window.open(next);
    })
  }
  showOviDemo() {
    window.open('http://ovi.surgical-outcomes.nl');
  }
}
