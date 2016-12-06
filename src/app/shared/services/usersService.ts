/**
 * Created by zhenglu on 12/5/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { User } from "../models/User";

@Injectable()
export class UsersService {

  private url: string = 'http://reqres.in/api/users';

  constructor(private http: Http) {}

  // grab all users
  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map( (res: Response) => res.json().data )
      .map( users => users.map(this.toUser))
      .catch(this.handleError);
  }

  // get single user
  getUser(id: number): Observable<User> {
    return this.http.get(`${ this.url }/${ id }`)
      .map( (res: Response) => res.json().data )
      .map(this.toUser)
      .catch(this.handleError);
  }

  // create a user

  // update a user
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put(`${ this.url }/${ id }`, user)
      .map( (res: Response) => res.json().data )
      .catch(this.handleError);
  }

  // delete a user

  /**
   * Handle user info from API
   */
  private toUser(user): User {
    return new User(user.id,
                    user.first_name + ' ' + user.last_name,
                    user.first_name,
                    user.avatar);
  }


  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}
