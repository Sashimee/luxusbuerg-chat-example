import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  roomId;
  messagesArray;
  myMessage = '';
  userArray;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ms: MessagesService,
    private us: UsersService) { }

  ngOnInit() {
    this.roomId = this.activatedRoute.snapshot.paramMap.get('id');
    setInterval(() => {
      this.loadMessage()
    }, 2000)
    this.us.getUsers().subscribe((res: any) => {
      this.userArray = res.data;
    })
  }
  handleClick() {
    this.ms.postMessage(this.roomId, this.myMessage).subscribe((response: any) => {
      console.log(response);
      this.messagesArray = response.data
    });
  }

  isConnected() {
    return !!this.us.getUserHash(); // double !! turn somehting into a boolean
  }

  loadMessage() {
    this.ms.getMessages(this.roomId).subscribe((response: any) => {
      console.log(response);
      this.messagesArray = response.data;
    });
  }
  getUserPicture(providedId) {
    // Array function is the best / avoid loops
    return this.userArray.find(user => user.id == providedId).picture;
  }
}
