import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    static GetUsers() {
      
    }

    constructor() { }

    usersList = [{ "name": "dfgdf", "email": "oboe1303@gmail.com", "password": "123456789", "confPassword": "123456789" }, { "name": "dfgdfdfhdfbhd", "email": "ddf@gmail.com", "password": "123456789", "confPassword": "123456789" }];

    addToUsers(user) {
        this.usersList.push(user);
    }

    getUsers() {
        console.log(this.usersList);
        return this.usersList;
    }

    deleteUser(userIndex){
        this.usersList.splice(userIndex, 1);
    }
}
