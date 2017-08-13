import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  arr: Array<number> = [1,2,3,4,5,6];

  constructor() { }

  ngOnInit() {
  }

}
