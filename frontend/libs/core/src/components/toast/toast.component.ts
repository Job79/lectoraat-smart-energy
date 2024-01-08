import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service'

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
    message: string | null = '';
    subscription: Subscription = new Subscription();

    constructor(private toastService: ToastService) { }

    ngOnInit() {
        this.subscription = this.toastService.toastSubject.subscribe(message => {
            this.message = message;
            setTimeout(() => this.message = null, 3000);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}