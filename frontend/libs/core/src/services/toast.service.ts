import { EventEmitter, Injectable } from '@angular/core';
import { catchError, ObservedValueOf, OperatorFunction } from 'rxjs';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toastEvent: EventEmitter<{ message: string; type: ToastType }> = new EventEmitter();

  public show(message: string, type: ToastType) {
    this.toastEvent.emit({ message, type });
  }

  public errorHandler<T, O>(
    message: string,
    type: ToastType = 'error',
  ): OperatorFunction<T, T | ObservedValueOf<O>> {
    return catchError((error) => {
      this.show(message, type);
      throw error;
    });
  }
}
