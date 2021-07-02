import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user:User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users:User[]; 
  showExtended:boolean = true;
  enableAdd:boolean = false;
  showUserForm:boolean = false;
  @ViewChild('userForm') form:any;

  constructor() {
    this.users=[];
  }

  ngOnInit(): void {
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

  onSubmit({value, valid} : NgForm){
    if(!valid){
      console.log("Form is not valid!");
    } else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
