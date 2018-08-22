import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserService]
})
export class ViewUsersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  };

}
