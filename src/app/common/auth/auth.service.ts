import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

export interface ILoginResponse {
  success: boolean;
  token?: string;
}

@Injectable()
export class AuthService {

  token: string = null;

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    return this.token ? true : false;
  }
login(email: string, password: string): Observable<ILoginResponse> {
  const data = {
    email: email,
    password: password,
  };
  return this.http.post<ILoginResponse>('http://localhost:3000/login', data)
  .do((response) => this.token = response && response.success && response.token || null); // coalescing. google it.
}

}
