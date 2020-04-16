import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(private us: UsersService, private router: Router) { }

  ngOnInit() {
  }
  handleClick() {
    this.us.logIn(this.username, this.password).subscribe((response: any) => {
      console.log(response);
      if (response.status == 1) {
        //everything is good
        //store the hash
        this.us.setUserHash(response.data.hash);
        // redirect the user to the rooms pages
        this.router.navigate(['/rooms']);
      } else {
        alert(response.data);
      }
    })
  }
}
