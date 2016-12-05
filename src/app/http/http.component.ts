import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/Rx';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://reqres.in/api/users')
      .map( (data: Response) => data.json().data )
      .subscribe( data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
