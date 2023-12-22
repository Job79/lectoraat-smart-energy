import { Inject, Injectable } from '@angular/core';
import { IPocketBase } from '@smart-energy/core';
import { from } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list() {
    return from(this.pb.collection('locations').getFullList());
  }
}
