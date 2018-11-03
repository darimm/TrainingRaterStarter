import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
userDataMock =  [{
  userName: 'mrah',
  firstName: 'Mahjong',
  lastName: 'Rah',
  password: 'abecdef',
  },
  {
    userName: 'hjamrho',
    firstName: 'Hang',
    lastName: 'Jam Rho',
    password: 'hcouibtn1',
  },
  {
    userName: 'hjarohm',
    firstName: 'Hang',
    lastName: 'Jar Ohm',
    password: 'obmtinihi',
  },
  {
    userName: 'rhamjohn',
    firstName: 'Rag',
    lastName: 'Ham John',
    password: 'bcrxhutonhcr8',
  },
  {
    userName: 'hjanhog',
    firstName: 'Harm',
    lastName: 'Jan Hog',
    password: 'bxuhcirhhtns3',
  },
  {
    userName: 'jahhonmr',
    firstName: 'Jag',
    lastName: 'Ah Hon Mr',
    password: 'omrlh2co45rhdt',
  },
  {
    userName: 'hjarhong',
    firstName: 'Ham',
    lastName: 'Jar Hong',
    password: 'ohioi23d5t6nhouddpf',
  }
];

  constructor() { }

  getUsers(): {}[] {
    return this.userDataMock;
  }

}
