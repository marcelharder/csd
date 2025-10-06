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
    this.pres.getPresenation('ppm').subscribe((next) => {
      window.open(next);
    });
  }

  showOviPPT() {
    this.pres.getPresenation('ovi').subscribe((next) => {
      window.open(next);
    });
  }

  showSoaPPT() {
    this.pres.getPresenation('soa').subscribe((next) => {
      window.open(next);
    });
  }

  showCHPPT() {
    this.pres.getPresenation('cda').subscribe((next) => {
      window.open(next);
    });
  }

  showWLPPT() {
    this.pres.getPresenation('wait').subscribe((next) => {          
      window.open(next);
    });
  }

  showPPM() {
    window.open('http://ppm.surgical-outcomes.nl');
  }
  showOviDemo() {
    window.open('http://ovi.surgical-outcomes.nl');
  }
  showSoaDemo() {
    window.open('http://trac.surgical-outcomes.nl');
  }
  showCHDemo() {
    window.open('http://chp.surgical-outcomes.nl');
  }
  showWLDemo() {
    window.open('http://wait.surgical-outcomes.nl');
  }

  showTutorial(x: number) {
    switch (x) {
      case 1:
        window.open(
          'https://docs.google.com/document/d/127ifGSodq6aJ0TlUikeGByjv8wKpgYmRTXVmsRiEqMg/edit?usp=share_link'
        );
        break;
      case 2:
        window.open(
          'https://docs.google.com/document/d/1vWHd47vurMdpIlmzEIG2RxPj300oX0_1gQp3e4TshJ0/edit?usp=share_link'
        );
        break;
      case 3:
        window.open(
          'https://docs.google.com/document/d/13M-dMYMg-ikCmtFarYyxLs3S2JZY4YhsAZ2n7dLk2FA/edit?usp=share_link'
        );
        break;
      case 4:
        window.open(
          'https://docs.google.com/document/d/1dHpsTpBH9RNKliCNt7kXsccqMeBKDbZNZoVrK2ghpM0/edit?usp=share_link'
        );
        break;
      case 5:
        window.open(
          'https://docs.google.com/document/d/1jkdBPY98mJhWnwNReY3LSEz0OkEv0_hogKPKCBP6LfY/edit?usp=share_link'
        );
        break;
    }
  }
}
