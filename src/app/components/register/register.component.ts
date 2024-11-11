import {Component} from '@angular/core';
import {NzSpinComponent} from 'ng-zorro-antd/spin';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzFormControlComponent, NzFormDirective} from 'ng-zorro-antd/form';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {AuthService} from '../../services/auth-service/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NzSpinComponent,
    NzRowDirective,
    NzFormControlComponent,
    NzInputDirective,
    NzFormDirective,
    NzColDirective,
    NzButtonComponent,
    NgIf,
    RouterLink,
    NzSpinModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  validateForm!: FormGroup;
  confirmationvalidator = (control: FormControl) : {[s: string]: boolean} => {
    if (!control.value) {
      return {required:true};
    } else if(control.value !== this.validateForm.controls['password'].value) {
      return {confirm:true, error:true};
    }
    return {};
  }

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        ]
      ],
      confirmPassword: [
        null,
        [
          Validators.required,
          this.confirmationvalidator,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        ]
      ]
    });
  }

  register() {
    console.log(this.validateForm.value);
    this.authService.register(this.validateForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
