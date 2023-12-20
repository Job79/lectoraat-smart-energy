import { Inject, Injectable } from '@angular/core';
import { Boiler, IPocketBase } from '@lectoraat-smart-energy/shared';
import { Observable, from } from 'rxjs';

@Injectable()
export class BoilerService {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

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
