import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  // sessionsMock = [
  //   { Name: 'John Teaches Angular', Location: 'Miles-U 1' },
  //   { Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
  //   { Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },
  // ];
  constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>('http://localhost:3000/sessions');
  }
}
