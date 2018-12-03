import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IUser {
    id: number;
    email: string;
    first: string;
    last: string;
    password: string;
    phone: string;
    isTrainer: boolean;
    aboutMe: string;
}

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/users/${id}`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/users', user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>('http://localhost:3000/users', user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`http://localhost:3000/users/${id}`);
  }
}
