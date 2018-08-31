import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  submitForm(email: string, password: string, firstName: string, lastName: string, username: string) {
    var newUser: User = new User(email, password, firstName, lastName, username);
    console.log(newUser);
    this.userService.addUser(newUser);
  }

}
