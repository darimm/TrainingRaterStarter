import { NgModule } from '@angular/core';
import { SessionsService } from './sessions.service';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: 
    [
        SessionsListComponent,
    ],
  imports: 
    [
        CommonModule,
    ],
  exports: [
    ],
  providers:
    [
        SessionsService
    ],

})
export class SessionsModule { }
