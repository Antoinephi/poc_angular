import { StationType } from './station-type.enum';

export interface Station {
  id: number;
  name: string;
  availableBikes: number;
  availableSlots: number;
  state: string;
  type: StationType;
  lastUpdated: string;
  coordinates: { latitude: number; longitude: number };
}
