import { Inject, Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { IPocketBase } from '../models/pocketbase.interface';
import { ILocation } from '../models/location.interface';

@Injectable()
export class LocationService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list({ query = '', page = 1, pageSize = 25 } = {}) {
    return from(
      this.pb.collection('locations').getList(page, pageSize, {
        sort: '-created',
        filter: query
          ? `name ~ "${query}" || postalCode ~ "${query}" || residence ~ "${query}"`
          : '',
      }),
    ).pipe(map(({ items }) => items));
  }

  public get(id: string) {
    return from(this.pb.collection('locations').getOne(id));
  }

  public create(location: ILocation) {
    return from(this.pb.collection('locations').create(location));
  }

  public update(location: ILocation) {
    return from(this.pb.collection('locations').update(location.id!, location));
  }

  public delete(location: ILocation) {
    return from(this.pb.collection('locations').delete(location.id!));
  }
}
