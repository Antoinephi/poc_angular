import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationType } from './station-type.enum';
import { Station } from './station';
import { map, tap, flatMap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private apiUrl = 'http://localhost:8080/stations';

  constructor(private http: HttpClient) { }

  getStations() {
    return this.http.get<any>(this.apiUrl).pipe(
      // tap(data => data.records.sort((a, b) => a.fields.libelle - b.fields.libelle)),
      // flatMap((data: any) => data.records),
      tap(data => console.log(data)),
      map(data => this.mapToStation(data))
    );
  }

  getClosestStations(latitude: number, longitude: number) {
    return this.http.get<any>(`${this.apiUrl}/closest/${latitude}/${longitude}`).pipe(
      // tap(data => data.records.sort((a, b) => a.fields.libelle - b.fields.libelle)),
      flatMap((data: any) => data),
      tap(data => console.log(data)),
      map(data => this.mapToStation(data))
      // )
    );
  }

  // private mapToStation(rawData) {
  //   const station: Station = {
  //     id: rawData.fields.libelle,
  //     name: (rawData.fields.nom as string),
  //     availableBikes: rawData.fields.nbvelosdispo,
  //     availableSlots: rawData.fields.nbplacesdispo,
  //     state: rawData.fields.etat,
  //     type: this.mapType(rawData.fields.type),
  //     lastUpdated: this.mapLastUpdate(rawData.fields.datemiseajour),
  //     coordinates: {
  //       latitude: rawData.fields.geo[0],
  //       longitude: rawData.fields.geo[1]
  //     }
  //   };
  //   return station;
  // }

  private mapToStation(rawData) {
    const station: Station = {
      id: rawData.id,
      name: rawData.name,
      availableBikes: rawData.availableBikes,
      availableSlots: rawData.availableSlots,
      state: rawData.isOnline,
      type: rawData.hasPaymentCard,
      lastUpdated: rawData.lastUpdated,
      coordinates: rawData.coordinates
    };
    return station;
  }


  private mapType(rawType: string): StationType {
    return rawType === 'AVEC TPE' ? StationType.CARD : StationType.NO_CARD;
  }

  private mapLastUpdate(rawTimestamp) {
    return moment(rawTimestamp).toString();
  }

}
