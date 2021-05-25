import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { Lbox1Component } from './lbox1/lbox1.component';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Details2Component } from './details2/details2.component';
import { Lbox2Component } from './lbox2/lbox2.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details2', component: Details2Component },
  { path: 'lbox1', component: Lbox1Component },
  { path: 'lbox2', component: Lbox2Component },
  { path: 'pricing', component: PricingComponent },
  { path: 'form', component: FormComponent },
  { path: 'video', component: VideoComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HeaderComponent,
  HistoryComponent,
  ServicesComponent,
  DetailsComponent,
  Details2Component,
  Lbox2Component,
  Lbox2Component,
  PricingComponent,
  FormComponent,
  VideoComponent,
  TestimonialsComponent,
  AboutComponent,
  ContactusComponent,
  FooterComponent,
];
