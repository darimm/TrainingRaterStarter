import { Component, OnInit } from '@angular/core';

import { SessionsService, ISession } from '../sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {

  sessions: ISession[] = [];

  constructor(
    private sessionsService: SessionsService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.sessionsService.getSessions()
      .subscribe(
        (sessions) => {
          this.sessions = sessions;
        });
  }

  goToAdd(): void {
    this.router.navigate(['sessions/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`sessions/${id}`]);
  }

}
