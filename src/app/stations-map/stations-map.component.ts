import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.service';
import { Station } from '../shared/station';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';
import OlVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import { fromLonLat, addCommon } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { StationType } from '../shared/station-type.enum';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit {
  private latitude = 50.6336555;
  private longitude = 3.0587139;
  private stationsList: Array<Station> = [];

  public selectedStation: Station = {
    id: 23,
    name: 'Test station name',
    availableBikes: 23,
    availableSlots: 42,
    state: "Available",
    type: StationType.CARD,
    lastUpdated: '23/03/2019',
    coordinates: { latitude: 23, longitude: 42 }
  };

  public showInfoBanner = true;

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

    const markers = [];

    this.stationService.getStations().subscribe(
      (station: Station) => {
        this.stationsList.push(station);
        const marker = new OlFeature({
          geometry: new OlPoint(
            fromLonLat([station.coordinates.longitude, station.coordinates.latitude])
          ),
          ...station
        });

        const iconStyle = new Style({
          image: new Icon(({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'assets/marker_48.png'
          }))
        });

        marker.setStyle(iconStyle);
        markers.push(marker);
      }, null, () => {
        const vectorSource = new OlSourceVector({
          features: [...markers]
        });

        const markerVectorLayer = new OlVector({
          source: vectorSource,
        });
        this.map.addLayer(markerVectorLayer);

        const popup = new Overlay({
          // element: element,
          positioning: 'bottom-center',
          stopEvent: false,
          offset: [0, -50]
        });
       this.map.addOverlay(popup);

      }
    );

    this.map.on('click', event => {
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (f) => f);
      this.showInfoBanner = !!feature;
      if (feature) {
        this.selectedStation = feature.getProperties();
      }
    });

  }
}

