import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [];
  canAddUser = false;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((users) => this.users = users);
  }

  deleteUser(user: IUser) {
    console.log(user);
    this.users.splice(user.userid, 1);
  }

  goToUserDetail(idParam: number | string): void {
    this.router.navigate(['users', idParam]);
  }

}
