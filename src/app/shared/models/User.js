"use strict";
/**
 * Created by zhenglu on 12/5/16.
 */
var User = (function () {
    function User(id, name, username, avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.avatar = avatar;
    }
    return User;
}());
exports.User = User;
