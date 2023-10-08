import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { HomeComponent } from './HomePage/home/home.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { AdminComponent } from './HomePage/admin/admin.component';
import { AdminGuard } from './AdminGuard';
import { UnauthorizedComponentComponent } from './unauthorized-component/unauthorized-component.component';
import { AuthGuard } from './AuthGuard';
import { BaseComponentComponent } from './base-component/base-component.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BaseComponentComponent, canActivate: [AuthGuard]  },
  { path: 'register', component: RegisterComponent  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard], 
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
