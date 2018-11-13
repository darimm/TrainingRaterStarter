import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IUsers {
    userid: number,
    userName: string,
    firstName: string,
    lastName: string,
    password: string
}

@Injectable()
export class UsersService {

// userDataMock: UsersType[] =  [{
//   userid: 0,
//   userName: 'mrah',
//   firstName: 'Mahjong',
//   lastName: 'Rah',
//   password: 'abecdef',
//   },
//   {
//     userid: 1,
//     userName: 'hjamrho',
//     firstName: 'Hang',
//     lastName: 'Jam Rho',
//     password: 'hcouibtn1',
//   },
//   {
//     userid: 2,
//     userName: 'hjarohm',
//     firstName: 'Hang',
//     lastName: 'Jar Ohm',
//     password: 'obmtinihi',
//   },
//   {
//     userid: 3,
//     userName: 'rhamjohn',
//     firstName: 'Rag',
//     lastName: 'Ham John',
//     password: 'bcrxhutonhcr8',
//   },
//   {
//     userid: 4,
//     userName: 'hjanhog',
//     firstName: 'Harm',
//     lastName: 'Jan Hog',
//     password: 'bxuhcirhhtns3',
//   },
//   {
//     userid: 5,
//     userName: 'jahhonmr',
//     firstName: 'Jag',
//     lastName: 'Ah Hon Mr',
//     password: 'omrlh2co45rhdt',
//   },
//   {
//     userid: 6,
//     userName: 'hjarhong',
//     firstName: 'Ham',
//     lastName: 'Jar Hong',
//     password: 'ohioi23d5t6nhouddpf',
//   }
// ];

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>('http://localhost:3000/users');
  }

}
