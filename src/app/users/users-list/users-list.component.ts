import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/services/usersService';

import { User } from "../../shared/models/User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe( (users: User[]) => this.users = users);
  }

}
