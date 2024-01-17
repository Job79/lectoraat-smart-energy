import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastType } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-energy-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy {
  type: ToastType = 'info';
  message = '';
  subscription: Subscription = new Subscription();
  timer!: ReturnType<typeof setTimeout>;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toastEvent.subscribe(({ message, type }) => {
      this.message = message;
      this.type = type;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => (this.message = ''), 5000);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeToast() {
    this.message = '';
  }
}
