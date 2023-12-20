import { Inject, Injectable } from '@angular/core';
import { Location, IPocketBase } from '@lectoraat-smart-energy/shared';
import { Observable, from } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public getLocations(): Observable<Location[]> {
    const locations = from(
      this.pb.collection('locations').getFullList({
        sort: '-created',
      }),
    );
    return locations;
  }

  public getLocation(id: string): Observable<Location> {
    const location = from(this.pb.collection('locations').getOne(id));
    return location;
  }
}
