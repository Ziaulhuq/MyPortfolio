import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NavigatoinComponent } from "./navigatoin/navigatoin.component";
import { HeaderComponent } from "./header/header.component";
import { HistoryComponent } from "./history/history.component";
import { ServicesComponent } from "./services/services.component";
import { DetailsComponent } from "./details/details.component";
import { Details2Component } from "./details2/details2.component";
import { Lbox1Component } from "./lbox1/lbox1.component";
import { Lbox2Component } from "./lbox2/lbox2.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FormComponent } from "./form/form.component";
import { VideoComponent } from "./video/video.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { AboutComponent } from "./about/about.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavigatoinComponent,
    HeaderComponent,
    HistoryComponent,
    ServicesComponent,
    DetailsComponent,
    Details2Component,
    Lbox1Component,
    Lbox2Component,
    PricingComponent,
    FormComponent,
    VideoComponent,
    TestimonialsComponent,
    AboutComponent,
    ContactusComponent,
    FooterComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
