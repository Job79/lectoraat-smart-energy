import { Inject, Injectable } from '@angular/core';
import { ILocation, IPocketBase } from '@smart-energy/core';
import { from } from 'rxjs';

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
