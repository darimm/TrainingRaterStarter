import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/:entityId', component: SessionDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:entityId', component: UserDetailComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
