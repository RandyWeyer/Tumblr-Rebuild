import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [UserService]
})
export class SplashComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUp(email: string, password: string, firstName: string, lastName: string, username: string) {
    firstName = "";
    lastName = "";
    var newUser: User = new User(email, password, firstName, lastName, username);
    console.log(newUser);
    this.userService.addUser(newUser);

    this.router.navigateByUrl('/dashboard');
  }

}
