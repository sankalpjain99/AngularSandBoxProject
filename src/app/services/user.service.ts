import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName:"John",
        lastName:"Doe",
        email: "johndoe@gmail.com",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      },
      {
        firstName:"Kevin",
        lastName:"Johnson",
        email: "kevinjohnson@gmail.com",
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide:true
      },
      {
        firstName:"Karen",
        lastName:"Williams",
        email: "karenwilliams@gmail.com",
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide:true
      }
    ];
  }

  getUsers(): User[]{
    return this.users;
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
