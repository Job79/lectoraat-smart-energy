import { Injectable } from '@angular/core';
import { Boiler, TypedPocketBase } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class BoilerService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  public getBoilers(id: string): Observable<Boiler[]> {
    const boilers = from(
      this.pb.collection('boilers').getFullList({
        sort: '-created',
        filter: `building.id="${id}"`,
      })
    );
    return boilers;
  }

  public async storeCalculation(boiler: Boiler) {
    await this.pb.collection('boilers').create(boiler);
  }
}
