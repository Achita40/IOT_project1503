import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';7
import { FrontLayouComponent } from './Layouts/front-layou/front-layou.component';

export const routes: Routes = [
  {
   path: '',
   component: FrontLayouComponent,
   children: [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'about',
        component: AboutComponent,
    },

    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: 'register',
        component: RegisterComponent,
    }
   ]
  }
];
