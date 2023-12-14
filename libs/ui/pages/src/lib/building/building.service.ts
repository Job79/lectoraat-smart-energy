import { Injectable } from '@angular/core';
import { Building, TypedPocketBase } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class BuildingService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  public getBuildings(): Observable<Building[]> {
    return from(
      this.pb.collection('buildings').getFullList({
        sort: '-created',
      })
    );
  }
}
