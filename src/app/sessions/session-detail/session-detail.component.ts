import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession } from '../sessions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

const defaultSession: ISession = {
  id: 0,
  name: '',
  location: '',
  startTime: new Date(),
  createdAt: null,
  updatedAt: null
};

@Component({
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  // ellipsis means copy the object don't give me the reference. does a shallow copy not a deep copy.
  session: ISession = { ...defaultSession };
  startTimeAsString = '2018-11-15T23:34';

  constructor(
      private sessionsService: SessionsService,
      private route: ActivatedRoute,
      private router: Router
      ) {}

  ngOnInit() {
    const idAsString = this.route.snapshot.paramMap.get('entityId');
    const id = isNaN(parseInt(idAsString, 10)) ? 0 : parseInt(idAsString, 10);
    if (id) {
        this.sessionsService.getSessionById(id)
        .subscribe(
            (session) => {
                this.session = session;
            },
            (error) => {
                console.log('error happened');
            }
        );
    }
  }

  private formValid(): boolean {
    if (this.session.name.trim() && this.session.location.trim()) {
        return true;
    }
    return false;
  }

  submit(): void {
      if (!this.formValid()) {
          // TODO: add not valid message here
          console.log('Form not valid');
          return;
      }
    this.sessionsService.createSession(this.session)
         .subscribe();
         if (this.session.id) {
             // update end point
            } else {
                // create end point
            }
            // this is what we do when we succeed
            this.router.navigate(['sessions']);
            // show success message here
    }
  }

