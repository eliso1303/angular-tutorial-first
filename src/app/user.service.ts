import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    static GetUsers() {
      
    }

    constructor() { }

    usersList = [];

    addToUsers(user) {
        // console.log(user);
        this.usersList.push(user);
    }

    getUsers() {
        return this.usersList;
    }

    deleteUser(userIndex){
        this.usersList.splice(userIndex, 1);
    }
}
