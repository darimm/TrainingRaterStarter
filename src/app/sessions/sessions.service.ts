import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO CCC: why do I have to do this for map to come in?
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/observable';
// import 'rxjs/add/operator/map';

export interface ISession {
  id: number;
  name: string;
  location: string;
  startTime: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SessionsService {
  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>('http://localhost:3000/sessions');
      // .map((sessions) => {
      //   sessions.forEach((session) => {
      //     const startTime = new Date(session.startTime);
      //     startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
      //     session.startTime = startTime.toISOString();
      //   });
      //   return sessions;
      // });
  }

  getSessionById(id: number): Observable<ISession> {
    return this.http.get<ISession>(`http://localhost:3000/sessions/${id}`);
  }

  save(session: ISession): Observable<ISession | number[]> {
    if (session.id) {
      return this.http.put<number[]>(`http://localhost:3000/sessions`, session);
    } else {
      return this.http.post<ISession>(`http://localhost:3000/sessions`, session);
    }
  }

}
