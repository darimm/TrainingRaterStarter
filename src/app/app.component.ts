import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isNavbarCollapsed = false;

  constructor(
    private toastsManager: ToastsManager,
    vcr: ViewContainerRef,
  ) {
    // sets the root view to be used with notifications
    this.toastsManager.setRootViewContainerRef(vcr);
  }
}
