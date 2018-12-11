import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.service';
import { Station } from '../shared/station';
import { StationType } from '../shared/station-type.enum';

@Component({
  selector: 'app-list-stations',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.scss']
})
export class ListStationsComponent implements OnInit {

  public stations: Array<Station> = [];
  public StationType = StationType;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getStations().subscribe(station => this.stations.push(station));
  }

}
