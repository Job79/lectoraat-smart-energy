import { Inject, Injectable } from '@angular/core';
import { ICalculation, IPocketBase } from '@smart-energy/core';
import { from } from 'rxjs';

@Injectable()
export class CalculationService<T> {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list(locationId: string) {
    return from(
      this.pb.collection('calculations').getFullList({
        filter: `location = '${locationId}'`,
      }) as Promise<ICalculation<T>[]>,
    );
  }
}
