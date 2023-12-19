import { Injectable } from '@angular/core';
import {
  Location,
  TypedPocketBase,
  environment,
} from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class LocationService {
  pb = new PocketBase(environment.pocketbase) as TypedPocketBase;

  public getLocations(): Observable<Location[]> {
    const locations = from(
      this.pb.collection('locations').getFullList({
        sort: '-created',
      }),
    );
    return locations;
  }
}
