import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

const defaultUser: IUser = {
  userid: 0,
  username: '',
  firstName: '',
  lastName: '',
  password: '',
};

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  user: IUser = {...defaultUser };
  formReady = false;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const idAsString = this.route.snapshot.paramMap.get('entityId');
    const id = isNaN(parseInt(idAsString, 10)) ? 0 : parseInt(idAsString, 10);

    if (id) {
      this.usersService.getUserById(id)
      .subscribe(
        (user) => {
          this.user = user;
          this.formReady = true;
        },
        (error) => {
          console.log('error happened');
        }
      );
    }
  }
  private formValid(): boolean {
    if (this.user.firstName.trim() && this.user.lastName.trim() && this.user.password.trim() && this.user.username.trim()) {
      return true;
    }
    return false;
  }

  submit(): void {
    if (!this.formValid()) {
      // TODO: add not valid message here
      console.log('Form not valid');
      return;
    }
    this.usersService.createUser(this.user)
    .subscribe();
    if (this.user.userid) {
      // update end point
    } else {
      // create end point
    }
    // do stuff when we succeed
    this.router.navigate(['users']);
    // show a success message here
  }
}
