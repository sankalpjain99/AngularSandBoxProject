import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users:User[]; 
  showExtended:boolean = true;
  enableAdd:boolean = true;

  constructor() {
    this.users=[];
  }

  ngOnInit(): void {
    this.users = [
      {
        firstName:"John",
        lastName:"Doe",
        age:30,
        address: {
            street:"50 Main St",
            city:"Boston",
            state:"MA"
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName:"Kevin",
        lastName:"Johnson",
        age:34,
        address: {
            street:"20 School St",
            city:"Lynn",
            state:"MA"
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstName:"Karen",
        lastName:"Williams",
        age:26,
        address: {
            street:"55 Mil St",
            city:"Miami",
            state:"MA"
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];
  }

  addUser(user:User){
    this.users.push(user);
  }

}
