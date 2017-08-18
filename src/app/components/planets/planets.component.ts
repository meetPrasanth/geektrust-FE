import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  @Input() planets: any;
  @Output() stepEvent: EventEmitter<Object> = new EventEmitter<Object>();

  currentStep = 0;

  constructor() { }

  ngOnInit() {
  }

  planetOutput(output) {
    console.log('output', this.planets, output);
    this.stepEvent.emit(output);
  }
}
