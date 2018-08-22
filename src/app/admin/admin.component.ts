import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(email: string, password: string, firstName: string, lastName: string) {
    var newUser: User = new User(email, password, firstName, lastName);
    console.log(newUser);
    this.userService.addUser(newUser);
  }

}
