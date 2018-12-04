import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

email = '';
password = '';

  constructor(
    private router: Router,
    private toastsManager: ToastsManager,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.email, this.password)
    .subscribe(
      (response) => {
        if (response.success) {
        this.toastsManager.success(response.token);
        } else {
          this.toastsManager.error('Login Failed');
        }
    },
    (error) => {
      this.toastsManager.error('Invalid User/Pass combo');
    } );
    }
  }
