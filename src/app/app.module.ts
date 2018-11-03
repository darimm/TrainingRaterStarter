import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SessionsService } from './sessions/sessions.service';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './users/users.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SessionsListComponent,
    HomeComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [SessionsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
