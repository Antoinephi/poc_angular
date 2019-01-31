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
import { Style, Icon, Circle } from 'ol/style';
import { fromLonLat, addCommon } from 'ol/proj';
import Overlay from 'ol/Overlay';
import OlText from 'ol/style/Text';
import OlFill from 'ol/style/Fill';
import { StationType } from '../shared/station-type.enum';
import Stroke from 'ol/style/Stroke';
import { GeolocationService } from '../geolocation/geolocation.service';
import OlGeolocation from 'ol/Geolocation';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit {
  private latitude = 50.6336555;
  private longitude = 3.0587139;
  private stationsList: Array<Station> = [];
  private positionFeature = new OlFeature();
  private accuracyFeature = new OlFeature();
  private accuracyRadius = 30;
  private accuracy = 0;
  private currZoom = 0;

  public selectedStation: Station = {
    id: 23,
    name: 'Test station name',
    availableBikes: 23,
    availableSlots: 42,
    state: 'Available',
    type: StationType.CARD,
    lastUpdated: '23/03/2019',
    coordinates: { latitude: 23, longitude: 42 }
  };

  public showInfoBanner = true;

  constructor(private stationService: StationService, private geolocationService: GeolocationService) { }

  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;

  ngAfterViewChecked() {
    this.map.on('rendercomplete', () => {
      this.geolocationService.getCurrentLocation(location => {
        if (location) {
          this.latitude = location.coords.latitude;
          this.longitude = location.coords.longitude;
          this.accuracy = location.coords.accuracy;
          this.updatePositionMarker();
        }
      });
    });
  }

  ngOnInit() {

    addCommon();
    this.source = new OlXYZ({
      url: 'https://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      preload: Infinity,
      source: this.source
    });

    this.view = new OlView({
      // center: fromLonLat([this.longitude, this.latitude]),
      center: [0, 0],
      zoom: 16
    });

    const geolocation = new OlGeolocation({
      trackingOptions: {
        enableHighAccuracy: true
      },
      tracking: true,
      projection: this.view.getProjection()
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });

    this.accuracyFeature.setStyle(new Style({
      zIndex: 10,
      image: new Circle({
        radius: this.accuracyRadius,
        fill: new OlFill({
          color: 'rgb(51, 153, 204, 0.6)'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 1
        })
      })
    }));

    // geolocation.on('change:accuracyGeometry', function () {
    //   this.accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    // });

    this.positionFeature.setStyle(new Style({
      zIndex: 100,
      image: new Circle({
        radius: 6,
        fill: new OlFill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));

    const markers = [this.positionFeature, this.accuracyFeature];

    this.stationService.getStations().subscribe(
      (station: Station) => {
        this.stationsList.push(station);
        const marker = new OlFeature({
          geometry: new OlPoint(
            fromLonLat([station.coordinates.longitude, station.coordinates.latitude])
          ),
          ...station
        });

        const iconStyle = [new Style({
          image: new Icon(({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'assets/marker_48.png'
          })), text: new OlText({
            text: `V:${station.availableBikes} / P:${station.availableSlots}`,
            offsetY: -25,
            scale: 1.5,
            fill: new OlFill({
              color: '#000'
            }),
            stroke: new Stroke({
              color: '#fff',
              width: 2
            })
          })
        })
        ];

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

        // const popup = new Overlay({
        //   positioning: 'bottom-center',
        //   stopEvent: false,
        //   offset: [0, -50]
        // });
        // this.map.addOverlay(popup);
      }
    );

    this.map.on('click', event => {
      const feature = this.map.forEachFeatureAtPixel(event.pixel, (f) => f);
      this.showInfoBanner = !!feature;
      if (feature) {
        this.selectedStation = feature.getProperties();
      }
    });

    this.map.getView().on('change:resolution', event => {
      // console.log({ event });
      this.currZoom = event.oldValue;
      // console.log(this.accuracy, this.currZoom, this.accuracy * 2 - this.currZoom);
      this.accuracyFeature.getStyle().getImage().setRadius(Math.max(this.accuracy * 2 - this.currZoom, 0));
    });

    // geolocation.on('change:position', () => {
    //   console.log('change position');
    //   console.log(geolocation.getAccuracy());
    //   const coordinates = geolocation.getPosition();
    //   console.log({ coordinates, geolocation });
    //   this.geolocationService.getCurrentLocation(location => {
    //     if (location) {
    //       console.log({ location });
    //     }
    //   });
    //   this.positionFeature.setGeometry(coordinates ? new OlPoint(coordinates) : null);
    // });

  }

  private updatePositionMarker() {
    this.accuracyFeature.setGeometry(new OlPoint(fromLonLat([this.longitude, this.latitude])));
    this.positionFeature.setGeometry(new OlPoint(fromLonLat([this.longitude, this.latitude])));
    this.accuracyFeature.getStyle().getImage().setRadius(this.accuracy * 2 - this.currZoom);
    this.view.setCenter(fromLonLat([this.longitude, this.latitude]));
  }
}

