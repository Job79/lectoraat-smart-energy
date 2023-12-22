import { Inject, Injectable } from '@angular/core';
import { ICalculation, IPocketBase } from '@smart-energy/core';
import { from } from 'rxjs';

@Injectable()
export class CalculationService<T> {
  constructor(@Inject('pocketbase') private pb: IPocketBase) {}

  public list(locationId: string) {
    return from(
      this.pb.collection('calculations').getFullList({
        filter: `locationId == '${locationId}'`,
      }) as Promise<ICalculation<T>[]>,
    );
  }

  public get(id: string) {
    return from(this.pb.collection('calculations').getOne(id) as Promise<ICalculation<T>>);
  }

  public create(calculation: ICalculation<T>) {
    return from(this.pb.collection('calculations').create(calculation) as Promise<ICalculation<T>>);
  }

  public update(calculation: ICalculation<T>) {
    return from(
      this.pb.collection('calculations').update(calculation.id!, calculation) as Promise<
        ICalculation<T>
      >,
    );
  }

  public delete(id: string) {
    return from(this.pb.collection('calculations').delete(id));
  }
}
