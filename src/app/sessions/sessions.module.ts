import { NgModule } from '@angular/core';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsService } from './sessions.service';
import { CommonModule } from '@angular/common';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SessionsListComponent,
        SessionDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        SessionsService,
    ],
})
export class SessionsModule { }
