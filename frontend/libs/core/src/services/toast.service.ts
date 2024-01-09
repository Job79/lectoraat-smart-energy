import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toastEvent: EventEmitter<{message: string, type: 'info' | 'warning' | 'error'}> = new EventEmitter();

    showToast(message: string, type: 'info' | 'warning' | 'error' = 'info') {
        this.toastEvent.emit({message, type});
    }
}