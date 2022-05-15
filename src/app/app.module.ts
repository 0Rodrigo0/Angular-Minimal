import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { NavComponent } from "./primeiro-componente/nav/nav.component";
import { FooterComponent } from "./primeiro-componente/footer/footer.component";
import { ContentComponent } from "./primeiro-componente/content/content.component";
import { LandingPageComponent } from "./primeiro-componente/landing-page/landing-page.component";
import { CarrousselComponent } from "./primeiro-componente/carroussel/carroussel.component";
import { ButtonsComponent } from "./primeiro-componente/buttons/buttons.component";

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    LandingPageComponent,
    CarrousselComponent,
    ButtonsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
