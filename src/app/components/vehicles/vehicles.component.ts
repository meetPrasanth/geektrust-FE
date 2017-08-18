import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  @Input() vehicles;
  @Output() stepEvent: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor() { }

  ngOnInit() {
  }

  vehicleOutput(output) {
    this.stepEvent.emit(output);
  }
}
