import { Inject, Injectable } from '@angular/core';
import { Location, IPocketBase, User } from '@lectoraat-smart-energy/shared';
import { ListResult } from 'pocketbase';
import { Observable, from, map } from 'rxjs';

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

  getLocationsList(page: number): Observable<Location[]> {
    return from(
      this.pb.collection('locations').getList(page, 10, {
        sort: '-created',
      }),
    ).pipe(map((result: ListResult<Location>) => result.items));
  }

  public getLocation(id: string): Observable<Location> {
    const location = from(this.pb.collection('locations').getOne(id));
    return location;
  }

  public async create(location: Location) {
    location.user = (this.pb.authStore.model as User).id!;
    await this.pb.collection('locations').create(location);
  }
}
