import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CardiohelpComponent } from './_pages/cardiohelp/cardiohelp.component';
import { OviComponent } from './_pages/ovi/ovi.component';
import { SoaComponent } from './_pages/soa/soa.component';
import { WaitlistComponent } from './_pages/waitlist/waitlist.component';
import { PpmComponent } from './_pages/ppm/ppm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'soa', component: SoaComponent },
  { path: 'ovi', component: OviComponent },
  { path: 'wait', component: WaitlistComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cardiohelp', component: CardiohelpComponent },
  { path: 'ppm', component: PpmComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
