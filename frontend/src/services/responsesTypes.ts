export interface StationGeneralInfo {
  station_id: string,
  name: string
}

export interface StationDetails {
  information: Information;
  status: Status;
}

export interface Information {
  lon: number;
  lat: number;
  rental_uris: RentalUris;
  _bcycle_station_type: string;
  region_id: string;
  address: string;
  name: string;
  station_id: string;
}

export interface RentalUris {
  ios: string;
  android: string;
}

export interface Status {
  is_returning: number;
  is_renting: number;
  is_installed: number;
  num_docks_available: number;
  num_bikes_available: number;
  last_reported: number;
  num_bikes_available_types: NumBikesAvailableTypes;
  station_id: string;
}

export interface NumBikesAvailableTypes {
  electric: number;
  smart: number;
  classic: number;
}
