import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.service';
import { Station } from '../shared/station';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

import { fromLonLat, addCommon } from 'ol/proj';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit {
  private latitude = 50.6336555;
  private longitude = 3.0587139;
  // private map: Map;
  private stationsList: Array<Station> = [];

  constructor(private stationService: StationService) { }

  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;

  ngOnInit() {
    addCommon();
    this.source = new OlXYZ({
      url: 'https://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: fromLonLat([this.longitude, this.latitude]),
      zoom: 18
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
    // this.stationService.getStations().subscribe(
    //   station => this.stationsList.push(station)
    // );
  }
}
