import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseUrl = "https://ajax-course.herokuapp.com"

  constructor(private http: HttpClient, private us: UsersService) { }

  getMessages(roomId) {
    return this.http.get(this.baseUrl + '/messages/' + roomId)
  }

  postMessage(roomId, mess) {
    const data = {
      'hash': this.us.getUserHash(),
      'message': mess
    }
    return this.http.post(this.baseUrl + '/messages/' + roomId, data);
  }
}
