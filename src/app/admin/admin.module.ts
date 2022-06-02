import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AdminLayoutComponent} from './shared/component/admin-layout/admin-layout.component';

import {LoginPageComponent} from './login-page/login-page/login-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";


const routes:Routes = [
  {path: '', component: AdminLayoutComponent,children:[
      {path:'',redirectTo:'/admin/login',pathMatch:'full'},
      {path:'login',component: LoginPageComponent}
    ]},
]

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule
    ],
  exports: []
})
export class AdminModule { }
