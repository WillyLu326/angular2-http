import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UsersService } from '../../shared/services/usersService';

import { User } from "../../shared/models/User";

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.css']
})
export class UsersSingleComponent implements OnInit {

  // single user
  user: User;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.getUser(this.route.snapshot.params['id'])
      .subscribe( user => this.user = user );
  }

}
