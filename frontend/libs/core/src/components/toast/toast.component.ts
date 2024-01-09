import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'smart-energy-toast',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy {
    type: 'info' | 'warning' | 'error' = 'info';
    message: string | null = '';
    subscription: Subscription = new Subscription();

    constructor(private toastService: ToastService) { }

    ngOnInit() {
        this.subscription = this.toastService.toastEvent.subscribe(({message, type}) => {
            this.message = message;
            this.type = type;
            setTimeout(() => this.message = null, 30000); // 30 seconds timeout
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    closeToast() {
        this.message = null;
    }
}