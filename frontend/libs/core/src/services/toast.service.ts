import { EventEmitter, Injectable } from '@angular/core';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toastEvent: EventEmitter<{ message: string; type: ToastType }> = new EventEmitter();

  show(message: string, type: ToastType) {
    this.toastEvent.emit({ message, type });
  }
}
