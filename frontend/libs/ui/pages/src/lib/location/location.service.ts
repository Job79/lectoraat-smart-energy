import { Inject, Injectable } from '@angular/core';
import { Location, IPocketBase, User } from '@lectoraat-smart-energy/shared';
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
    const location = from(
      this.pb.collection('locations').getOne('w9u3ekpwha8x32k'),
    );
    return location;
  }

  public async create(location: Location) {
    location.user = (this.pb.authStore.model as User).id!;
    await this.pb.collection('locations').create(location);
  }
}
