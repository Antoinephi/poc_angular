import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationServiceMock {

  public getStations() {
    return of(
      [
        {
          'id': 1,
          'name': 'METROPOLE EUROPEENNE DE LILLE',
          'availableBikes': 15,
          'availableSlots': 21,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.641926,
            'longitude': 3.075992
          }
        },
        {
          'id': 2,
          'name': 'UNIVERSITE CATHOLIQUE',
          'availableBikes': 13,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.632233,
            'longitude': 3.046134
          }
        },
        {
          'id': 3,
          'name': 'JARDIN VAUBAN',
          'availableBikes': 7,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.636093,
            'longitude': 3.050447
          }
        },
        {
          'id': 4,
          'name': 'MAISON FOLIE WAZEMMES',
          'availableBikes': 11,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.624695,
            'longitude': 3.048961
          }
        },
        {
          'id': 5,
          'name': 'MASSENA',
          'availableBikes': 1,
          'availableSlots': 31,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63156,
            'longitude': 3.054738
          }
        },
        {
          'id': 6,
          'name': 'REPUBLIQUE BEAUX ARTS',
          'availableBikes': 4,
          'availableSlots': 20,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.630943,
            'longitude': 3.060299
          }
        },
        {
          'id': 7,
          'name': 'PLACE DE STRASBOURG',
          'availableBikes': 8,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.633728,
            'longitude': 3.055307
          }
        },
        {
          'id': 8,
          'name': 'PLACE RICHEBE',
          'availableBikes': 3,
          'availableSlots': 29,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.632366,
            'longitude': 3.062313
          }
        },
        {
          'id': 9,
          'name': 'RUE DE TOUL',
          'availableBikes': 18,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63393,
            'longitude': 3.044986
          }
        },
        {
          'id': 10,
          'name': 'RIHOUR',
          'availableBikes': 11,
          'availableSlots': 20,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63589,
            'longitude': 3.062471
          }
        },
        {
          'id': 11,
          'name': 'NOUVEAU SIECLE',
          'availableBikes': 6,
          'availableSlots': 25,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63734,
            'longitude': 3.060977
          }
        },
        {
          'id': 12,
          'name': 'OPERA',
          'availableBikes': 7,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.637486,
            'longitude': 3.065902
          }
        },
        {
          'id': 13,
          'name': 'QUAI DU WAULT',
          'availableBikes': 1,
          'availableSlots': 17,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63671,
            'longitude': 3.054773
          }
        },
        {
          'id': 14,
          'name': 'CHAMP DE MARS',
          'availableBikes': 9,
          'availableSlots': 31,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63781,
            'longitude': 3.052217
          }
        },
        {
          'id': 15,
          'name': 'ESPLANADE',
          'availableBikes': 5,
          'availableSlots': 19,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6449,
            'longitude': 3.050645
          }
        },
        {
          'id': 16,
          'name': 'MAGASIN',
          'availableBikes': 1,
          'availableSlots': 15,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.646225,
            'longitude': 3.053499
          }
        },
        {
          'id': 17,
          'name': 'HALLE AUX SUCRES',
          'availableBikes': 1,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.644695,
            'longitude': 3.060867
          }
        },
        {
          'id': 18,
          'name': 'VOLTAIRE',
          'availableBikes': 8,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6428,
            'longitude': 3.055932
          }
        },
        {
          'id': 19,
          'name': 'RUE ROYALE',
          'availableBikes': 2,
          'availableSlots': 22,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64031,
            'longitude': 3.05774
          }
        },
        {
          'id': 20,
          'name': 'N.D. DE LA TREILLE',
          'availableBikes': 11,
          'availableSlots': 19,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.640385,
            'longitude': 3.062053
          }
        },
        {
          'id': 21,
          'name': 'PLACE DU CONCERT',
          'availableBikes': 4,
          'availableSlots': 16,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64193,
            'longitude': 3.061774
          }
        },
        {
          'id': 22,
          'name': 'LOUISE DE BETTIGNIES',
          'availableBikes': 7,
          'availableSlots': 23,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64124,
            'longitude': 3.064987
          }
        },
        {
          'id': 23,
          'name': 'RUE DES ARTS',
          'availableBikes': 14,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.639107,
            'longitude': 3.065548
          }
        },
        {
          'id': 24,
          'name': 'FLANDRES EURALILLE',
          'availableBikes': 12,
          'availableSlots': 28,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63698,
            'longitude': 3.071009
          }
        },
        {
          'id': 25,
          'name': 'GARE LILLE FLANDRES',
          'availableBikes': 10,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63603,
            'longitude': 3.069678
          }
        },
        {
          'id': 26,
          'name': 'MOLINEL',
          'availableBikes': 12,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63457,
            'longitude': 3.068007
          }
        },
        {
          'id': 27,
          'name': 'TANNEURS',
          'availableBikes': 9,
          'availableSlots': 26,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.635014,
            'longitude': 3.064802
          }
        },
        {
          'id': 28,
          'name': 'PALAIS RAMEAU',
          'availableBikes': 20,
          'availableSlots': 20,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.634686,
            'longitude': 3.048344
          }
        },
        {
          'id': 29,
          'name': 'ST SEBASTIEN',
          'availableBikes': 16,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.647236,
            'longitude': 3.059376
          }
        },
        {
          'id': 30,
          'name': 'RUE DE GAND',
          'availableBikes': 5,
          'availableSlots': 14,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64306,
            'longitude': 3.067452
          }
        },
        {
          'id': 31,
          'name': 'PONT NEUF',
          'availableBikes': 11,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.644264,
            'longitude': 3.062935
          }
        },
        {
          'id': 32,
          'name': 'PLACE AUX BLEUETS',
          'availableBikes': 7,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64142,
            'longitude': 3.067873
          }
        },
        {
          'id': 33,
          'name': 'PORT DE LILLE',
          'availableBikes': 6,
          'availableSlots': 20,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63022,
            'longitude': 3.035681
          }
        },
        {
          'id': 34,
          'name': 'PLACE CATINAT',
          'availableBikes': 16,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63413,
            'longitude': 3.041209
          }
        },
        {
          'id': 35,
          'name': 'LECLERC',
          'availableBikes': 15,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62899,
            'longitude': 3.043307
          }
        },
        {
          'id': 36,
          'name': 'CORMONTAIGNE',
          'availableBikes': 26,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62624,
            'longitude': 3.039911
          }
        },
        {
          'id': 37,
          'name': 'FULTON',
          'availableBikes': 6,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62337,
            'longitude': 3.037553
          }
        },
        {
          'id': 38,
          'name': 'PLACE CASQUETTE',
          'availableBikes': 8,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62429,
            'longitude': 3.045321
          }
        },
        {
          'id': 39,
          'name': 'MARCHE DE WAZEMMES',
          'availableBikes': 10,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.627674,
            'longitude': 3.050173
          }
        },
        {
          'id': 40,
          'name': 'METRO GAMBETTA',
          'availableBikes': 4,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62614,
            'longitude': 3.051729
          }
        },
        {
          'id': 41,
          'name': 'BUISSON',
          'availableBikes': 10,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.656487,
            'longitude': 3.088004
          }
        },
        {
          'id': 42,
          'name': 'PLACE PHILIPPE LEBON',
          'availableBikes': 2,
          'availableSlots': 16,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.627586,
            'longitude': 3.061974
          }
        },
        {
          'id': 43,
          'name': 'THEATRE SEBASTOPOL',
          'availableBikes': 12,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.629044,
            'longitude': 3.058288
          }
        },
        {
          'id': 44,
          'name': 'GAMBETTA UTRECHT',
          'availableBikes': 4,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.629063,
            'longitude': 3.053711
          }
        },
        {
          'id': 45,
          'name': 'BRULE MAISON',
          'availableBikes': 10,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62648,
            'longitude': 3.056666
          }
        },
        {
          'id': 46,
          'name': 'ARTOIS',
          'availableBikes': 11,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62629,
            'longitude': 3.061198
          }
        },
        {
          'id': 47,
          'name': 'BOULEVARD LOUIS XIV',
          'availableBikes': 6,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62824,
            'longitude': 3.069233
          }
        },
        {
          'id': 48,
          'name': 'PORTE DE DOUAI',
          'availableBikes': 13,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61831,
            'longitude': 3.0722
          }
        },
        {
          'id': 49,
          'name': 'PLACE DELIOT',
          'availableBikes': 10,
          'availableSlots': 14,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61957,
            'longitude': 3.068387
          }
        },
        {
          'id': 50,
          'name': 'RUE D\'ARRAS',
          'availableBikes': 12,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62224,
            'longitude': 3.067004
          }
        },
        {
          'id': 51,
          'name': 'JB LEBAS',
          'availableBikes': 8,
          'availableSlots': 24,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62482,
            'longitude': 3.068689
          }
        },
        {
          'id': 52,
          'name': 'PLACE COLETTE BESSON',
          'availableBikes': 14,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62276,
            'longitude': 3.063799
          }
        },
        {
          'id': 53,
          'name': 'PORTE DES POSTES',
          'availableBikes': 20,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61856,
            'longitude': 3.049251
          }
        },
        {
          'id': 54,
          'name': 'METRO WAZEMMES',
          'availableBikes': 18,
          'availableSlots': 2,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62338,
            'longitude': 3.051565
          }
        },
        {
          'id': 55,
          'name': 'PORTE D\'ARRAS',
          'availableBikes': 4,
          'availableSlots': 20,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.617847,
            'longitude': 3.061758
          }
        },
        {
          'id': 56,
          'name': 'BD VICTOR HUGO',
          'availableBikes': 6,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.620304,
            'longitude': 3.055471
          }
        },
        {
          'id': 57,
          'name': 'BARTHELEMY DELESPAUL',
          'availableBikes': 10,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62418,
            'longitude': 3.058902
          }
        },
        {
          'id': 58,
          'name': 'PORTE DE VALENCIENNES',
          'availableBikes': 13,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.620857,
            'longitude': 3.078947
          }
        },
        {
          'id': 59,
          'name': 'BELFORT',
          'availableBikes': 18,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.622223,
            'longitude': 3.077127
          }
        },
        {
          'id': 60,
          'name': 'TREVISE',
          'availableBikes': 9,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.621185,
            'longitude': 3.072363
          }
        },
        {
          'id': 61,
          'name': 'LILLE GRAND PALAIS',
          'availableBikes': 10,
          'availableSlots': 14,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.629246,
            'longitude': 3.075218
          }
        },
        {
          'id': 62,
          'name': 'ZENITH',
          'availableBikes': 4,
          'availableSlots': 26,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.632965,
            'longitude': 3.076437
          }
        },
        {
          'id': 63,
          'name': 'HOTEL DE REGION',
          'availableBikes': 3,
          'availableSlots': 29,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.629738,
            'longitude': 3.078224
          }
        },
        {
          'id': 64,
          'name': 'MAIRIE DE LILLE',
          'availableBikes': 11,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6318,
            'longitude': 3.071392
          }
        },
        {
          'id': 65,
          'name': 'PLACE TACQ',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.621128,
            'longitude': 3.035483
          }
        },
        {
          'id': 66,
          'name': 'DELESALLE MEDIATHEQUE',
          'availableBikes': 12,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63237,
            'longitude': 3.066273
          }
        },
        {
          'id': 67,
          'name': 'MONTEBELLO',
          'availableBikes': 23,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.621952,
            'longitude': 3.04534
          }
        },
        {
          'id': 68,
          'name': 'NATIONALE RUE DU PORT',
          'availableBikes': 13,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.630836,
            'longitude': 3.047778
          }
        },
        {
          'id': 69,
          'name': 'CHASSEURS DE DRIANT',
          'availableBikes': 20,
          'availableSlots': 2,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61893,
            'longitude': 3.032539
          }
        },
        {
          'id': 70,
          'name': 'CITE ADMINISTRATIVE',
          'availableBikes': 1,
          'availableSlots': 15,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63424,
            'longitude': 3.073991
          }
        },
        {
          'id': 71,
          'name': 'BOIS BLANCS',
          'availableBikes': 19,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.634045,
            'longitude': 3.030778
          }
        },
        {
          'id': 72,
          'name': 'CANTELEU',
          'availableBikes': 6,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.637302,
            'longitude': 3.024314
          }
        },
        {
          'id': 73,
          'name': 'ST MAURICE PELLEVOISIN',
          'availableBikes': 24,
          'availableSlots': 0,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.642315,
            'longitude': 3.087979
          }
        },
        {
          'id': 74,
          'name': 'FAUBOURG DE ROUBAIX',
          'availableBikes': 0,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.641018,
            'longitude': 3.082493
          }
        },
        {
          'id': 75,
          'name': 'EUGENE JACQUET',
          'availableBikes': 17,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.637337,
            'longitude': 3.084894
          }
        },
        {
          'id': 76,
          'name': 'FIVES',
          'availableBikes': 24,
          'availableSlots': 0,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.632996,
            'longitude': 3.089651
          }
        },
        {
          'id': 77,
          'name': 'MONT DE TERRE',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.622963,
            'longitude': 3.091363
          }
        },
        {
          'id': 78,
          'name': 'HOTEL DE POLICE',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.615536,
            'longitude': 3.048518
          }
        },
        {
          'id': 79,
          'name': 'CIMETIERE DU SUD',
          'availableBikes': 15,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61307,
            'longitude': 3.047221
          }
        },
        {
          'id': 80,
          'name': 'PETIT MAROC',
          'availableBikes': 4,
          'availableSlots': 26,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61989,
            'longitude': 3.084357
          }
        },
        {
          'id': 81,
          'name': 'GUINGUETTE',
          'availableBikes': 5,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63529,
            'longitude': 3.115088
          }
        },
        {
          'id': 82,
          'name': 'GARE LILLE EUROPE',
          'availableBikes': 31,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63999,
            'longitude': 3.075204
          }
        },
        {
          'id': 83,
          'name': 'EURATECHNOLOGIES',
          'availableBikes': 8,
          'availableSlots': 16,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63407,
            'longitude': 3.02066
          }
        },
        {
          'id': 84,
          'name': 'MAIRIE D\'HELLEMMES',
          'availableBikes': 23,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.627243,
            'longitude': 3.109266
          }
        },
        {
          'id': 85,
          'name': 'CHANZY',
          'availableBikes': 8,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.625183,
            'longitude': 3.100729
          }
        },
        {
          'id': 86,
          'name': 'ROGER SALENGRO',
          'availableBikes': 6,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.628742,
            'longitude': 3.104017
          }
        },
        {
          'id': 87,
          'name': 'JULES GUESDE',
          'availableBikes': 4,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.632393,
            'longitude': 3.110669
          }
        },
        {
          'id': 88,
          'name': 'RUE NATIONALE',
          'availableBikes': 0,
          'availableSlots': 30,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.635082,
            'longitude': 3.058015
          }
        },
        {
          'id': 89,
          'name': 'BOULEVARD DE METZ',
          'availableBikes': 2,
          'availableSlots': 16,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.619312,
            'longitude': 3.041299
          }
        },
        {
          'id': 90,
          'name': 'LOUVIERE',
          'availableBikes': 15,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.645107,
            'longitude': 3.086049
          }
        },
        {
          'id': 91,
          'name': 'SQUARE DES MERES',
          'availableBikes': 4,
          'availableSlots': 21,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63422,
            'longitude': 3.096542
          }
        },
        {
          'id': 92,
          'name': 'RUE DE LA GAITE',
          'availableBikes': 14,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63665,
            'longitude': 3.091106
          }
        },
        {
          'id': 93,
          'name': 'STADE BALLET',
          'availableBikes': 14,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.628918,
            'longitude': 3.088147
          }
        },
        {
          'id': 94,
          'name': 'MARX DORMOY',
          'availableBikes': 6,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63579,
            'longitude': 3.033977
          }
        },
        {
          'id': 95,
          'name': 'MARBRERIE',
          'availableBikes': 18,
          'availableSlots': 0,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63041,
            'longitude': 3.097037
          }
        },
        {
          'id': 96,
          'name': 'ROMARIN',
          'availableBikes': 13,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64543,
            'longitude': 3.075116
          }
        },
        {
          'id': 97,
          'name': 'LA MADELEINE GARE',
          'availableBikes': 14,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.65937,
            'longitude': 3.074057
          }
        },
        {
          'id': 98,
          'name': 'PLACE DU MARCHE',
          'availableBikes': 24,
          'availableSlots': 0,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6549,
            'longitude': 3.068756
          }
        },
        {
          'id': 99,
          'name': 'LA MADELEINE MAIRIE',
          'availableBikes': 24,
          'availableSlots': 0,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.654602,
            'longitude': 3.073805
          }
        },
        {
          'id': 100,
          'name': 'SAINT MAUR',
          'availableBikes': 7,
          'availableSlots': 17,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.651638,
            'longitude': 3.081625
          }
        },
        {
          'id': 101,
          'name': 'MONS SARTS',
          'availableBikes': 11,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6423,
            'longitude': 3.099291
          }
        },
        {
          'id': 102,
          'name': 'MAIRIE DE MONS',
          'availableBikes': 7,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.642418,
            'longitude': 3.110835
          }
        },
        {
          'id': 103,
          'name': 'LACORDAIRE',
          'availableBikes': 10,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.639828,
            'longitude': 3.106677
          }
        },
        {
          'id': 104,
          'name': 'MENDES FRANCE',
          'availableBikes': 14,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64584,
            'longitude': 3.112744
          }
        },
        {
          'id': 105,
          'name': 'VERDUN',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.638126,
            'longitude': 3.10231
          }
        },
        {
          'id': 106,
          'name': 'CONCORDE',
          'availableBikes': 5,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.638123,
            'longitude': 3.112704
          }
        },
        {
          'id': 107,
          'name': 'LAVOISIER',
          'availableBikes': 9,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.636105,
            'longitude': 3.106438
          }
        },
        {
          'id': 108,
          'name': 'GENERAL DE GAULLE',
          'availableBikes': 15,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.645267,
            'longitude': 3.100516
          }
        },
        {
          'id': 109,
          'name': 'SQUARE DU PORTUGAL',
          'availableBikes': 8,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.623466,
            'longitude': 3.030667
          }
        },
        {
          'id': 110,
          'name': 'RUE BONTE-POLLET',
          'availableBikes': 4,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62487,
            'longitude': 3.034234
          }
        },
        {
          'id': 111,
          'name': 'HELLEMMES CIMETIERE',
          'availableBikes': 8,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62486,
            'longitude': 3.116677
          }
        },
        {
          'id': 112,
          'name': 'SQUARE CHARLES DE GAULLE',
          'availableBikes': 4,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.626846,
            'longitude': 3.115101
          }
        },
        {
          'id': 113,
          'name': 'AVENUE DE MORMAL',
          'availableBikes': 16,
          'availableSlots': 2,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.651337,
            'longitude': 3.08945
          }
        },
        {
          'id': 114,
          'name': 'BOIS HABITE',
          'availableBikes': 4,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62651,
            'longitude': 3.079211
          }
        },
        {
          'id': 115,
          'name': 'DE GAULLE',
          'availableBikes': 17,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.651497,
            'longitude': 3.072316
          }
        },
        {
          'id': 116,
          'name': 'BOTANIQUE',
          'availableBikes': 2,
          'availableSlots': 14,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64891,
            'longitude': 3.078336
          }
        },
        {
          'id': 117,
          'name': 'HIPPODROME',
          'availableBikes': 13,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.641617,
            'longitude': 3.031375
          }
        },
        {
          'id': 118,
          'name': 'COLLEGE LAVOISIER',
          'availableBikes': 13,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.641834,
            'longitude': 3.022364
          }
        },
        {
          'id': 119,
          'name': 'LOMME-LAMBERSART',
          'availableBikes': 13,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.640957,
            'longitude': 3.018803
          }
        },
        {
          'id': 120,
          'name': 'LOMME MAIRIE',
          'availableBikes': 6,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.639366,
            'longitude': 3.012452
          }
        },
        {
          'id': 121,
          'name': 'PONT SUPERIEUR',
          'availableBikes': 9,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.644855,
            'longitude': 3.013238
          }
        },
        {
          'id': 122,
          'name': 'PISCINE DE MARCQ',
          'availableBikes': 13,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.665714,
            'longitude': 3.087294
          }
        },
        {
          'id': 123,
          'name': 'RUE DE L\'EGLISE',
          'availableBikes': 7,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.665348,
            'longitude': 3.075792
          }
        },
        {
          'id': 124,
          'name': 'CLEMENCEAU HIPPODROME',
          'availableBikes': 10,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6618,
            'longitude': 3.096235
          }
        },
        {
          'id': 125,
          'name': 'FORT DE MONS',
          'availableBikes': 9,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.643883,
            'longitude': 3.118579
          }
        },
        {
          'id': 126,
          'name': 'LE POLYEDRE',
          'availableBikes': 11,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64057,
            'longitude': 3.115571
          }
        },
        {
          'id': 127,
          'name': 'FLERS MAIRIE',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63708,
            'longitude': 3.127964
          }
        },
        {
          'id': 128,
          'name': 'RUE LOUISE MICHEL',
          'availableBikes': 9,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.633842,
            'longitude': 3.127335
          }
        },
        {
          'id': 129,
          'name': 'FLERS CHATEAU',
          'availableBikes': 11,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63608,
            'longitude': 3.130853
          }
        },
        {
          'id': 130,
          'name': 'PONT DE BOIS',
          'availableBikes': 11,
          'availableSlots': 19,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.624516,
            'longitude': 3.127894
          }
        },
        {
          'id': 131,
          'name': 'V.ASCQ HOTEL DE VILLE',
          'availableBikes': 2,
          'availableSlots': 35,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.619602,
            'longitude': 3.13197
          }
        },
        {
          'id': 132,
          'name': 'CENTRE COMMERCIAL V2',
          'availableBikes': 10,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61606,
            'longitude': 3.132006
          }
        },
        {
          'id': 133,
          'name': 'BOULEVARD DE VALMY',
          'availableBikes': 5,
          'availableSlots': 23,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61915,
            'longitude': 3.126501
          }
        },
        {
          'id': 134,
          'name': 'RUE DES VICTOIRES',
          'availableBikes': 10,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6221,
            'longitude': 3.131706
          }
        },
        {
          'id': 135,
          'name': 'FLERS MASQUELIER',
          'availableBikes': 8,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63745,
            'longitude': 3.123145
          }
        },
        {
          'id': 136,
          'name': 'RUE CHAMBORD',
          'availableBikes': 6,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62972,
            'longitude': 3.133873
          }
        },
        {
          'id': 137,
          'name': 'HERON PARC',
          'availableBikes': 8,
          'availableSlots': 22,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.615868,
            'longitude': 3.126089
          }
        },
        {
          'id': 138,
          'name': 'LADRIERE',
          'availableBikes': 11,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.631298,
            'longitude': 3.126914
          }
        },
        {
          'id': 139,
          'name': 'RUE DE LILLE',
          'availableBikes': 8,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.62577,
            'longitude': 3.144714
          }
        },
        {
          'id': 140,
          'name': 'RUE CORNEILLE',
          'availableBikes': 6,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.623795,
            'longitude': 3.144815
          }
        },
        {
          'id': 141,
          'name': 'METRO TRIOLO',
          'availableBikes': 11,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61682,
            'longitude': 3.140808
          }
        },
        {
          'id': 142,
          'name': 'TREMIERE',
          'availableBikes': 14,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6206,
            'longitude': 3.138207
          }
        },
        {
          'id': 143,
          'name': 'ROND POINT DE TOURNAI',
          'availableBikes': 13,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61776,
            'longitude': 3.146026
          }
        },
        {
          'id': 144,
          'name': 'ANNAPPES REPUBLIQUE',
          'availableBikes': 13,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6258,
            'longitude': 3.14862
          }
        },
        {
          'id': 145,
          'name': 'RESIDENCE',
          'availableBikes': 4,
          'availableSlots': 16,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61992,
            'longitude': 3.14528
          }
        },
        {
          'id': 146,
          'name': 'SOLFERINO NATIONALE',
          'availableBikes': 10,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.63268,
            'longitude': 3.052483
          }
        },
        {
          'id': 147,
          'name': 'FAUBOURG D\'ARRAS',
          'availableBikes': 15,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61405,
            'longitude': 3.062195
          }
        },
        {
          'id': 148,
          'name': 'P.I. DE DOUAI',
          'availableBikes': 12,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.612194,
            'longitude': 3.074952
          }
        },
        {
          'id': 149,
          'name': 'JEAN JAURES',
          'availableBikes': 13,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.609592,
            'longitude': 3.075483
          }
        },
        {
          'id': 150,
          'name': 'RONCHIN MAIRIE',
          'availableBikes': 18,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.60548,
            'longitude': 3.077622
          }
        },
        {
          'id': 151,
          'name': 'CH. DES MARGUERITOIS',
          'availableBikes': 8,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.60642,
            'longitude': 3.072209
          }
        },
        {
          'id': 152,
          'name': 'CHEMIN ROUGE',
          'availableBikes': 15,
          'availableSlots': 1,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.61058,
            'longitude': 3.065103
          }
        },
        {
          'id': 153,
          'name': 'POMPIDOU',
          'availableBikes': 16,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.65547,
            'longitude': 3.064989
          }
        },
        {
          'id': 154,
          'name': 'CHAUFFERIE',
          'availableBikes': 14,
          'availableSlots': 2,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.65532,
            'longitude': 3.060615
          }
        },
        {
          'id': 155,
          'name': 'BAILLY',
          'availableBikes': 12,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.655098,
            'longitude': 3.051201
          }
        },
        {
          'id': 156,
          'name': 'ST ANDRE MAIRIE',
          'availableBikes': 14,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.661602,
            'longitude': 3.050322
          }
        },
        {
          'id': 157,
          'name': 'CANON D\'OR',
          'availableBikes': 9,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.64989,
            'longitude': 3.042045
          }
        },
        {
          'id': 158,
          'name': 'DELECAUT',
          'availableBikes': 8,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.644943,
            'longitude': 3.036932
          }
        },
        {
          'id': 200,
          'name': 'MAIRIE DE CROIX',
          'availableBikes': 20,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.679123,
            'longitude': 3.155906
          }
        },
        {
          'id': 201,
          'name': 'EDHEC',
          'availableBikes': 4,
          'availableSlots': 26,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.673943,
            'longitude': 3.163443
          }
        },
        {
          'id': 202,
          'name': 'PARC BARBIEUX',
          'availableBikes': 5,
          'availableSlots': 19,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.677914,
            'longitude': 3.162353
          }
        },
        {
          'id': 203,
          'name': 'VICTOR PROVO',
          'availableBikes': 1,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.68079,
            'longitude': 3.167454
          }
        },
        {
          'id': 204,
          'name': 'JEAN MOULIN',
          'availableBikes': 4,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.684757,
            'longitude': 3.171974
          }
        },
        {
          'id': 205,
          'name': 'CONDITION PUBLIQUE',
          'availableBikes': 8,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.69094,
            'longitude': 3.188538
          }
        },
        {
          'id': 206,
          'name': 'ALFRED MONGY',
          'availableBikes': 15,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.688015,
            'longitude': 3.174815
          }
        },
        {
          'id': 207,
          'name': 'EUROTELEPORT',
          'availableBikes': 13,
          'availableSlots': 17,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.69138,
            'longitude': 3.17966
          }
        },
        {
          'id': 208,
          'name': 'DE FOURMIES',
          'availableBikes': 5,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.67544,
            'longitude': 3.181998
          }
        },
        {
          'id': 209,
          'name': 'USINE',
          'availableBikes': 13,
          'availableSlots': 17,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.674995,
            'longitude': 3.195737
          }
        },
        {
          'id': 210,
          'name': 'LINNE',
          'availableBikes': 10,
          'availableSlots': 2,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.676884,
            'longitude': 3.187817
          }
        },
        {
          'id': 211,
          'name': 'GUSTAVE DELORY',
          'availableBikes': 7,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.674164,
            'longitude': 3.174519
          }
        },
        {
          'id': 212,
          'name': 'DANIELLE LESAFFRE',
          'availableBikes': 0,
          'availableSlots': 18,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.682053,
            'longitude': 3.182205
          }
        },
        {
          'id': 213,
          'name': 'LANNOY',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.68859,
            'longitude': 3.182028
          }
        },
        {
          'id': 214,
          'name': 'SAINT JEAN-BAPTISTE',
          'availableBikes': 9,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6795,
            'longitude': 3.179257
          }
        },
        {
          'id': 215,
          'name': 'TROIS PONTS',
          'availableBikes': 5,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.684593,
            'longitude': 3.200799
          }
        },
        {
          'id': 216,
          'name': 'FRATERNITE',
          'availableBikes': 7,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.681797,
            'longitude': 3.194122
          }
        },
        {
          'id': 217,
          'name': 'HOPITAL VICTOR PROVO',
          'availableBikes': 3,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.67869,
            'longitude': 3.172558
          }
        },
        {
          'id': 218,
          'name': 'PLACE SPRIET',
          'availableBikes': 10,
          'availableSlots': 14,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.67392,
            'longitude': 3.18514
          }
        },
        {
          'id': 219,
          'name': 'GARE JEAN LEBAS',
          'availableBikes': 12,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.695477,
            'longitude': 3.164222
          }
        },
        {
          'id': 220,
          'name': 'MUSEE ART ET INDUSTRIE',
          'availableBikes': 5,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.693768,
            'longitude': 3.167666
          }
        },
        {
          'id': 221,
          'name': 'ROUBAIX MAIRIE',
          'availableBikes': 23,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.69184,
            'longitude': 3.173925
          }
        },
        {
          'id': 222,
          'name': 'LES GOBELINS',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.6941,
            'longitude': 3.172165
          }
        },
        {
          'id': 223,
          'name': 'PLACE TRICHON',
          'availableBikes': 6,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.690315,
            'longitude': 3.16912
          }
        },
        {
          'id': 224,
          'name': 'CENTRE NAUTIQUE',
          'availableBikes': 4,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.691406,
            'longitude': 3.162704
          }
        },
        {
          'id': 225,
          'name': 'EPEULE MONTESQUIEU',
          'availableBikes': 11,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.683987,
            'longitude': 3.16327
          }
        },
        {
          'id': 226,
          'name': 'CHARLES DE GAULLE',
          'availableBikes': 11,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.68645,
            'longitude': 3.170006
          }
        },
        {
          'id': 227,
          'name': 'BVRD ARMENTIERES',
          'availableBikes': 8,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.699436,
            'longitude': 3.159658
          }
        },
        {
          'id': 228,
          'name': 'PELLART',
          'availableBikes': 6,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.69535,
            'longitude': 3.180779
          }
        },
        {
          'id': 229,
          'name': 'NATIONS UNIES',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.692368,
            'longitude': 3.185092
          }
        },
        {
          'id': 230,
          'name': 'DE LA VIGNE',
          'availableBikes': 5,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.70076,
            'longitude': 3.18407
          }
        },
        {
          'id': 231,
          'name': 'MOTTE BOSSUT',
          'availableBikes': 5,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.689762,
            'longitude': 3.177179
          }
        },
        {
          'id': 232,
          'name': 'FOSSE AUX CHENES',
          'availableBikes': 5,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.699734,
            'longitude': 3.174347
          }
        },
        {
          'id': 233,
          'name': 'RUE DE TOURCOING',
          'availableBikes': 8,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.702026,
            'longitude': 3.172654
          }
        },
        {
          'id': 234,
          'name': 'ALSACE',
          'availableBikes': 10,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.7004,
            'longitude': 3.161378
          }
        },
        {
          'id': 235,
          'name': 'BLANCHEMAILLE',
          'availableBikes': 6,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.696327,
            'longitude': 3.16713
          }
        },
        {
          'id': 236,
          'name': 'CHAPTAL',
          'availableBikes': 6,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.694714,
            'longitude': 3.192643
          }
        },
        {
          'id': 237,
          'name': 'RUE DES ANGES',
          'availableBikes': 6,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.719803,
            'longitude': 3.156338
          }
        },
        {
          'id': 238,
          'name': 'THEATRE TOURCOING',
          'availableBikes': 7,
          'availableSlots': 10,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72075,
            'longitude': 3.152659
          }
        },
        {
          'id': 239,
          'name': 'BVRD DE L EGALITE',
          'availableBikes': 7,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.730278,
            'longitude': 3.167521
          }
        },
        {
          'id': 240,
          'name': 'POSTE',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.71922,
            'longitude': 3.163396
          }
        },
        {
          'id': 241,
          'name': 'LE CORBUSIER',
          'availableBikes': 5,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.722343,
            'longitude': 3.170847
          }
        },
        {
          'id': 242,
          'name': 'TOURCOING GARE',
          'availableBikes': 9,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.716843,
            'longitude': 3.167834
          }
        },
        {
          'id': 243,
          'name': 'VICTOIRE',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.718204,
            'longitude': 3.15749
          }
        },
        {
          'id': 244,
          'name': 'F ROOSEVELT',
          'availableBikes': 9,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.727448,
            'longitude': 3.16646
          }
        },
        {
          'id': 245,
          'name': 'JARDIN BOTANIQUE',
          'availableBikes': 6,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.724686,
            'longitude': 3.165703
          }
        },
        {
          'id': 246,
          'name': 'CAVELL',
          'availableBikes': 5,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72271,
            'longitude': 3.163794
          }
        },
        {
          'id': 247,
          'name': 'ROUGET DE L ISLE',
          'availableBikes': 7,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.734142,
            'longitude': 3.167987
          }
        },
        {
          'id': 248,
          'name': 'RUE SAINT BLAISE',
          'availableBikes': 5,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.728798,
            'longitude': 3.158835
          }
        },
        {
          'id': 249,
          'name': 'RUE DE MENIN',
          'availableBikes': 3,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.728798,
            'longitude': 3.154051
          }
        },
        {
          'id': 250,
          'name': 'TOURCOING MAIRIE',
          'availableBikes': 9,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72389,
            'longitude': 3.160344
          }
        },
        {
          'id': 251,
          'name': 'COLBERT',
          'availableBikes': 7,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72551,
            'longitude': 3.156554
          }
        },
        {
          'id': 252,
          'name': 'RUE DES POUTRAINS',
          'availableBikes': 9,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72263,
            'longitude': 3.150377
          }
        },
        {
          'id': 253,
          'name': 'AVENUE MILLET',
          'availableBikes': 9,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.725006,
            'longitude': 3.150677
          }
        },
        {
          'id': 254,
          'name': 'SEBASTOPOL',
          'availableBikes': 7,
          'availableSlots': 11,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.717323,
            'longitude': 3.162236
          }
        },
        {
          'id': 255,
          'name': 'RUE DE ROUBAIX',
          'availableBikes': 6,
          'availableSlots': 6,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.7134,
            'longitude': 3.165011
          }
        },
        {
          'id': 256,
          'name': 'PONT DE NEUVILLE',
          'availableBikes': 7,
          'availableSlots': 9,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.73696,
            'longitude': 3.171169
          }
        },
        {
          'id': 257,
          'name': 'CHARLES WATTINNE',
          'availableBikes': 9,
          'availableSlots': 7,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.714733,
            'longitude': 3.157181
          }
        },
        {
          'id': 258,
          'name': 'CARLIERS',
          'availableBikes': 7,
          'availableSlots': 5,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.710735,
            'longitude': 3.159881
          }
        },
        {
          'id': 259,
          'name': 'MERCURE',
          'availableBikes': 10,
          'availableSlots': 8,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.704693,
            'longitude': 3.160515
          }
        },
        {
          'id': 260,
          'name': 'PLACE ROUSSEL',
          'availableBikes': 8,
          'availableSlots': 12,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.72101,
            'longitude': 3.157978
          }
        },
        {
          'id': 261,
          'name': 'PHALEMPINS',
          'availableBikes': 3,
          'availableSlots': 13,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.732277,
            'longitude': 3.157656
          }
        },
        {
          'id': 262,
          'name': 'WATTRELOS PLACE',
          'availableBikes': 14,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 0,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.701187,
            'longitude': 3.215011
          }
        },
        {
          'id': 263,
          'name': 'STALINGRAD',
          'availableBikes': 8,
          'availableSlots': 4,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.69626,
            'longitude': 3.209156
          }
        },
        {
          'id': 264,
          'name': 'REPUBLIQUE',
          'availableBikes': 9,
          'availableSlots': 3,
          'state': 'EN SERVICE',
          'type': 1,
          'lastUpdated': 'Sun Dec 23 2018 12:37:04 GMT+0100',
          'coordinates': {
            'latitude': 50.697895,
            'longitude': 3.206297
          }
        }
      ]).pipe(
        flatMap(mockedStation => mockedStation)
      )
      ;
  }

}
