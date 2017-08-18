import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Urls } from "../../utilities/urls.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  title: string = 'FINDING FALCONE';
  planets: Array<any> = [];
  displayPlanets: Array<any> = [];
  vehicles: Array<any> = [];
  currentStep: number = 1;

  showVehicleFlag = false;
  stepCompletedFlag = false;

  constructor(private _httpService: HttpService) {
    this.getPlanets();
    this.getVehicles();
  }

  ngOnInit() {
  }

  getPlanets(): any {
    this._httpService.get(Urls.BASE_URL + Urls.PLANETS).then(data => {
      this.planets = data;
      this.displayPlanets = data;
    });
  }

  getVehicles(): any {
    this._httpService.get(Urls.BASE_URL + Urls.VEHICLES).then(data => {
      this.vehicles = data;
    });
  }

  planetsOutput(output) {
    console.log("home", this.planets, output);
    if (output.isSelected) {
      this.displayPlanets = [];
      this.displayPlanets.push(output.planet);
      this.showVehicleFlag = output;
    }
  }

  vehiclesOutput(output) {
    console.log('home-vehicle', output);
    if (output.isSelected) {
      this.vehicles.forEach(vehicle => {
        vehicle['disabled'] = false;
        if (vehicle.name === output.vehicle.name) {
          vehicle.selected = false;
        }
        if (vehicle.total_no == 0) {
          vehicle['disabled'] = true;
        }
      })
      this.stepChanged();
    }
  }

  stepChanged() {
    if (this.currentStep == 4) {
      this.stepCompletedFlag = true;
      // this.currentStep = 1;
    } else {
      let index = this.planets.indexOf(this.displayPlanets[0]);
      if (index != -1) {
        this.planets.splice(index, 1);
      }
      this.displayPlanets = this.planets;
      console.log("index", index);
      this.showVehicleFlag = false;
      this.currentStep++;
    }
  }
}
