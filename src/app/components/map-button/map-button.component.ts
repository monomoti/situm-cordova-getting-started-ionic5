import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.scss'],
})
export class MapButtonComponent implements OnInit {

  @Input() building: any;
  @Output() showBuildingMap: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  showMap() {
    this.showBuildingMap.emit({ building: JSON.parse(this.building) });
  }

}
