import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppm',
  templateUrl: './ppm.component.html',
  styleUrls: ['./ppm.component.css']
})
export class PpmComponent implements OnInit {
  isFirstOpen:boolean = true;
  oneAtATime:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  showPPMPowerpoint(){}

  showPPM(){window.open("http://ppm.surgical-outcomes.nl")}

  goBack(){window.history.back()}

}
