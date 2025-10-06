import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PresentationService } from 'src/app/_services/Presentation.service';

@Component({
  selector: 'app-cardiohelp',
  templateUrl: './cardiohelp.component.html',
  styleUrls: ['./cardiohelp.component.css']
})
export class CardiohelpComponent implements OnInit {
  isFirstOpen = true;
  oneAtATime = true;
  constructor(
    private alertify: ToastrService,
    private pres: PresentationService) { }

  ngOnInit() {
  }
  showCHPPT() {
    this.pres.getPresenation("cda").subscribe((next) => {
      window.open(next);
    })
  }
  showCHDemo() {
    window.open("http://chp.surgical-outcomes.nl"); 
    }

}
