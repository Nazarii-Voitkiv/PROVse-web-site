import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {NoAuthGuard} from './guards/no-auth-guard/no-auth.guard';

export const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", loadChildren:()=> import("./admin/admin.module").then(m => m.AdminModule)},
  {path: "user", loadChildren:()=> import("./user/user.module").then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
