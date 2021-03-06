import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { HomeComponent } from './views/home/home.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetCardComponent,
    PlanetsComponent,
    VehicleComponent,
    VehiclesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }