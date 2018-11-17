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

    if (id && id !== 0) {
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
    this.formReady = true;
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
    if (this.user.userid !== 0) { // new users get id 0
      this.usersService.updateUser(this.user)
      .subscribe(
        () => { // Return to the users page after we get our response
          this.router.navigate(['users']);
        },
        (error) => {
          // TODO: Display some kind of error here, possibly navigate back to the users list
          console.log(error);
        }
      );
    } else {
      this.usersService.createUser(this.user)
    .subscribe(
      () => { // Return to the users page after we get our response
        this.router.navigate(['users']);
      },
      (error) => {
        // TODO: Display some kind of error here, possibly navigate back to the users list
        console.log(error);
      }
    );
    }
    // do stuff when we succeed.
    // show a success message here
  }
}
