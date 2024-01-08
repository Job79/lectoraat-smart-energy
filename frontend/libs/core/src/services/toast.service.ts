import { Inject, Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toastSubject = new Subject<string>();

    show(message: string) {
        this.toastSubject.next(message);
    }
}