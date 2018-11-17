import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((users) => this.users = users);
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
    .subscribe(
      () => {
        // TODO This seems hacky. Update the endpoint to return a list of users?
        this.users.splice(this.users.findIndex((i) => i.id === id), 1);
        this.router.navigate(['users']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToUserDetail(idParam: number | string): void {
    this.router.navigate(['users', idParam]);
  }

}
