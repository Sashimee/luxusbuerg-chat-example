import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username = '';
  password = '';
  image = '';

  constructor(
    private us: UsersService,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.us.signUp(this.username, this.password, this.image).subscribe(async (response: any) => {
      console.log(response);
      if (response.status == 1) {
        // it was a success
        // store the hash...
        this.us.setUserHash(response.data.hash);
        // redirect the user to the rooms pages
        this.router.navigate(['/rooms']);
      } else {
        const toast = await this.toastController.create({
          message: response.data,
          duration: 2000
        })
        toast.present();
      }
    })
  }
}
