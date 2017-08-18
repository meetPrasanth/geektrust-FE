import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  @Input() planet: any;
  @Output() selectEvent: EventEmitter<Object> = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  selectPlanet() {
    this.planet['selected'] = true;
    this.selectEvent.emit(
      { 
        isSelected : true,
        planet : this.planet
      }
    );
  }

}
