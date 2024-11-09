import {Component, TemplateRef} from '@angular/core';
import {NzSpinComponent} from 'ng-zorro-antd/spin';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzFormControlComponent, NzFormDirective} from 'ng-zorro-antd/form';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {AbstractControl, NgModel} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';

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
    NzButtonComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isSpinning: unknown;
  userErrorTpl: string | TemplateRef<{ $implicit: AbstractControl | NgModel }> | undefined;

}
