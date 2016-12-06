import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../shared/services/usersService';
import { User } from "../../shared/models/User";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // grab single user
    this.usersService.getUser(this.route.snapshot.params['id'])
      .subscribe( user => this.user = user);
  }

  onUpdate(user: User) {
    this.usersService.updateUser(user.id, user)
      .subscribe( () => {
        console.log('updated');
        this.router.navigate(['/users']);
      });
  }

}
