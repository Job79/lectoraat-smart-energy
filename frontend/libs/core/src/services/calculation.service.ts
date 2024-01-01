import { Inject, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IPocketBase } from '../models/pocketbase.interface';
import { ICalculation } from '../models/calculation.interface';

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

  public get(id: string) {
    return from(this.pb.collection('calculations').getOne(id) as Promise<ICalculation<T>>);
  }

  public save(calculation: ICalculation<T>) {
    if (calculation.id) {
      return from(
        this.pb.collection('calculations').update(calculation.id, calculation) as Promise<
          ICalculation<T>
        >,
      );
    } else {
      return from(
        this.pb.collection('calculations').create(calculation) as Promise<ICalculation<T>>,
      );
    }
  }

  public delete(id: string) {
    return from(this.pb.collection('calculations').delete(id));
  }
}
