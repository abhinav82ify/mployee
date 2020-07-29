import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
  subsink: Subscription[] = [];

  constructor() {
    this.subsink = [];
  }

  ngOnDestroy() {
    this.subsink.forEach((sub) => sub && sub.unsubscribe());
  }
}
