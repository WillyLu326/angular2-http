import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { UsersService } from './shared/services/usersService';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersSingleComponent } from './users/users-single/users-single.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';

import { DoublePipe } from "./pipes/doublePipe";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UsersEditComponent,
    UsersSingleComponent,
    UsersCreateComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
