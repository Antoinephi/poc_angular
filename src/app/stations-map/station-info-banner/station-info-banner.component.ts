import { Component, OnInit, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Station } from 'src/app/shared/station';

@Component({
  selector: 'app-station-info-banner',
  templateUrl: './station-info-banner.component.html',
  styleUrls: ['./station-info-banner.component.scss']
})
export class StationInfoBannerComponent implements OnInit {

  @Input() station: Station;

  constructor() { }

  ngOnInit() {
  }

}
