import { Component, OnInit } from '@angular/core';
import { UsersService, IUsers } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [];
  canAddUser = false;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((users) => this.users = users);
  }

  addUser(): void {
    this.users.push(new Object(
      {userid: this.users.length, username: 'username', firstName: 'First', lastName: 'Last', password: 'Password'}
    ));
    this.canAddUser = !this.canAddUser;
  }

  formChanged(event) {
    console.log(event);
    console.log(this.users[this.users.length - 1].userName);
    if (
      (this.users[this.users.length - 1].username !== 'username')
    && (this.users[this.users.length - 1].firstName !== 'First')
    && (this.users[this.users.length - 1].lastName !== 'Last')
    && (this.users[this.users.length - 1].password !== 'Password')
    && (this.canAddUser = true)
    ) {
      this.canAddUser = !this.canAddUser;
    }
  }

  deleteUser(user: IUsers) {
    console.log(user);
    this.users.splice(user.userid, 1);
  }
}
