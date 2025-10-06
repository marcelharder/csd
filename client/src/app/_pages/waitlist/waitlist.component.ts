import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PresentationService } from 'src/app/_services/Presentation.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {
  isFirstOpen = true;
  oneAtATime = true;
  constructor(private alertify: ToastrService, private pres: PresentationService) { }

  ngOnInit() {
  }
  showWLPPT(){
    this.alertify.show("Show the Waitinglist powerpoint, in another window.");
    this.pres.getPresenation("wait").subscribe((next)=>{
      window.open(next);
    })
  }
  
  showWLDemo(){
    window.open("http://wait.surgical-outcomes.nl"); 
  }
}
