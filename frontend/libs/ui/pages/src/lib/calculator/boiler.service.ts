import { Injectable } from '@angular/core';
import {
  Boiler,
  TypedPocketBase,
  environment,
} from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';
import { Observable, from } from 'rxjs';

@Injectable()
export class BoilerService {
  pb = new PocketBase(environment.pocketbase) as TypedPocketBase;

  public getBoilers(id: string): Observable<Boiler[]> {
    const boilers = from(
      this.pb.collection('boilers').getFullList({
        sort: '-created',
        filter: `location.id="${id}"`,
      }),
    );
    return boilers;
  }

  public async storeCalculation(boiler: Boiler) {
    const record = await this.pb.collection('boilers').create(boiler);
    console.log(record);
  }
}
