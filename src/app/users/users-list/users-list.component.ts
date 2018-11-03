import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

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
    this.users = this.usersService.getUsers();
  }

  addUser(): void {
    this.users.push(new Object(
      {userName: 'username', firstName: 'First', lastName: 'Last', password: 'Password'}
    ));
    this.canAddUser = !this.canAddUser;
  }

  formChanged(event) {
    console.log(event);
    console.log(this.users[this.users.length - 1].userName);
    if (
      (this.users[this.users.length - 1].userName !== 'username')
    && (this.users[this.users.length - 1].firstName !== 'First')
    && (this.users[this.users.length - 1].lastName !== 'Last')
    && (this.users[this.users.length - 1].password !== 'Password')
    && (this.canAddUser = true)
    ) {
      console.log('Got here.');
      this.canAddUser = !this.canAddUser;
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
