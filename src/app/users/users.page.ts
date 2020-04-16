import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usersArray = [];
  constructor(private us: UsersService) { }

  ngOnInit() {
    this.us.getUsers().subscribe((response: any) => {
      console.log(response);
      this.usersArray = response.data
    })
  }

}
