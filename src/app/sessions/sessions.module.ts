import { NgModule } from '@angular/core';
import { SessionsService } from './sessions.service';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CommonModule } from '@angular/common';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SessionsListComponent, SessionDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [],
  providers: [SessionsService]
})
export class SessionsModule {}
