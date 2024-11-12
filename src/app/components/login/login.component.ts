import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth-service/auth.service';
import {LocalStorageService} from '../../services/storage-service/local-storage.service';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm !: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private notification: NzNotificationService,) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  login() {
    console.log(this.validateForm.value);
    this.authService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value).subscribe((res) =>{

      if(LocalStorageService.isAdminLoggedIn()) {
        this.router.navigateByUrl("/admin/dashboard");
      } else if(LocalStorageService.isUserLoggedIn()) {
        this.router.navigateByUrl("/user/dashboard");
      }
    }, error => {
      console.log(error)
      if (error.status === 406) {
        this.notification.error(
          "ERROR",
          "User is not Active. Please register first",
          {nzDuration: 5000}
        )
      } else {
        this.notification.error(
          "ERROR",
          "Bad crendentials",
          {nzDuration: 5000}
        )
      }
    })
  }
}
