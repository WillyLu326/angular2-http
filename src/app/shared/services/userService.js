"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhenglu on 12/5/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var rxjs_1 = require("rxjs");
var User_1 = require("../models/User");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://reqres.in/api/users';
    }
    // grab all users
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.url)
            .map(function (res) { return res.json().data; })
            .map(function (users) { return users.map(_this.toUser); })
            .catch(this.handleError);
    };
    // get single user
    // getUser(id: number): Observable<User> {
    //   return this.http.get(`${ this.url }/${ id }`)
    //     .map( (res: Response) => res.json().data )
    //     .map( user => user.map(this.toUser) )
    //     .catch(this.handleError);
    // }
    // create a user
    // update a user
    // delete a user
    /**
     * Handle user info from API
     */
    UserService.prototype.toUser = function (user) {
        return new User_1.User(user.id, user.first_name + ' ' + user.last_name, user.first_name, user.avatar);
    };
    /**
     * Handle any errors from the API
     */
    UserService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return rxjs_1.Observable.throw(errMessage);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
