import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  @Input() vehicle;
  @Output() selectEvent: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  selectedVechicle() {
    this.vehicle['selected'] = true;
    this.vehicle.total_no--;
    this.selectEvent.emit(
      {
        isSelected : true,
        vehicle : this.vehicle
      }
    );
  }

}
