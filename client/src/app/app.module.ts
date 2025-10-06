import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule} from "ngx-bootstrap/pagination";
import { TabsModule} from "ngx-bootstrap/tabs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/About.component';
import { FormsModule } from '@angular/forms';
import { PresentationService } from './_services/Presentation.service';
import { SoaComponent } from './_pages/soa/soa.component';
import { OviComponent } from './_pages/ovi/ovi.component';
import { WaitlistComponent } from './_pages/waitlist/waitlist.component';
import { ContactComponent } from './contact/contact.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CardiohelpComponent } from './_pages/cardiohelp/cardiohelp.component';
import { PpmComponent } from './_pages/ppm/ppm.component';


@NgModule({
  declarations: [									
    AppComponent,
      NavMenuComponent,
      HomeComponent,
      AboutComponent,
      SoaComponent,
      OviComponent,
      WaitlistComponent,
      ContactComponent,
      CardiohelpComponent,
      PpmComponent
   ],
  imports: [
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    

  ],
  providers: [PresentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
