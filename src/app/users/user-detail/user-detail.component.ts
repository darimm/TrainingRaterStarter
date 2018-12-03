import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { ToastsManager } from 'ng2-toastr'; // Required to use toasts.

const defaultUser: IUser = {
  id: 0,
  email: '',
  first: '',
  last: '',
  password: '',
  phone: '',
  isTrainer: false,
  aboutMe: ''
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
    private router: Router,
    private toastsManager: ToastsManager // Toasts is a service, this implements it.
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
          this.toastsManager.error('Unable to retrieve User');
          console.error(error);
        }
      );
    }
    this.formReady = true;
  }
  private formValid(): boolean {
    if (this.user.first.trim() && this.user.last.trim() && this.user.password.trim() && this.user.email.trim() && this.user.phone.trim()) {
      return true;
    }
    return false;
  }

  submit(): void {
    if (!this.formValid()) {
      this.toastsManager.error('Form invalid');
      return;
    }
    console.log(this.user.id);
    if (this.user.id !== 0) { // new users get id 0
      console.log ('passed first if');
      this.usersService.updateUser(this.user)
      .subscribe(
        () => { // Return to the users page after we get our response
          this.toastsManager.success('User Updated');
          this.router.navigate(['users']);
        },
        (error) => {
          this.toastsManager.error('Unable to update user');
          console.log(error);
        }
      );
    } else {
      this.usersService.createUser(this.user)
    .subscribe(
      () => { // Return to the users page after we get our response
        this.toastsManager.success('User Created');
        this.router.navigate(['users']);
      },
      (error) => {
        this.toastsManager.error('Unable to create user');
        console.error(error);
        this.router.navigate(['users']);
      }
    );
    }
  }
}
