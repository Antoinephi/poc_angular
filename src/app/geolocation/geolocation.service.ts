import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public getCurrentLocation(callback) {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(callback);
    } else {
      throw new Error('No geolocation');
    }
  }

  public get() {
    if (navigator.geolocation) {
      return navigator.geolocation;
    }
  }

}
