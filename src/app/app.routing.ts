/**
 * Created by zhenglu on 12/5/16.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from "./users/users.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersSingleComponent } from "./users/users-single/users-single.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UsersSingleComponent
      },
      {
        path: ':id/edit',
        component: UsersEditComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
