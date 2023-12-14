import { Injectable } from '@angular/core';
import { Building, TypedPocketBase } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class BuildingService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  public getBuildings(): Observable<Building[]> {
    const buildings = from(
      this.pb.collection('buildings').getFullList({
        sort: '-created',
      })
    );
    return buildings;
  }

  public getBuilding(id: string): Observable<Building> {
    const building = from(this.pb.collection('buildings').getOne(id));
    return building;
  }
}
