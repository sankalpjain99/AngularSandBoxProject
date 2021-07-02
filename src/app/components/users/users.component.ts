import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) {
    this.users=[];
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onSubmit({value, valid} : NgForm){
    if(!valid){
      console.log("Form is not valid!");
    } else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

}
