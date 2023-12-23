import { Inject, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IPocketBase } from '../models/pocketbase.interface';
import { ILocation } from '../models/location.interface';

@Injectable()
export class LocationService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list() {
    return from(this.pb.collection('locations').getFullList());
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
}
