import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth-service/auth.service';

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
              private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  login() {
    console.log(this.validateForm.value);
    this.authService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value).subscribe((res) =>{
      console.log(res);
    })
  }

}
