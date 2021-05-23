import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CredentailDto } from '../models/CredentailDto';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { FriendDto } from '../models/FriendDto';
import { MessageGetDto } from '../models/MessageGetDto';
import { AddFriendPostDto } from '../models/AddFriendPostDto';
import { UserCreatePostDto } from '../models/UserCreatePostDto';
import { map, tap } from 'rxjs/operators';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class DataService {

  url = 'https://graphe-chat.herokuapp.com/';
  token = localStorage.getItem('token');

  constructor(
    private http: HttpClient) {
  }


  getFriend(userId: string): Observable<FriendDto[]> {
    var val = this.http.get<FriendDto[]>(this.url + 'get/friends/' + userId,
      {
        headers: {
          Authorization: this.token
        }
      });



    return val;
  }

  getMessages(page: number, friendId: string): Observable<MessageGetDto[]> {

    var val = this.http.get<MessageGetDto[]>(this.url + 'getMessage/' + page + '/' + friendId, {
      headers: {
        Authorization: this.token
      }
    });
    return val;
  }

  getUser(firstName: string, userId: string): Observable<User[]> {
    var val = this.http.get<User[]>(this.url + 'find/friend/' + firstName + '/' + userId, {
      headers: {
        Authorization: this.token
      }
    });
    return val;
  }

  addFriend(addFriendPostDto: AddFriendPostDto) {

    var val = this.http.post<AddFriendPostDto>(this.url + 'add/friend', addFriendPostDto, {
      headers: {
        Authorization: this.token
      }
    });

    return val;
  }

  addUser(userCreatePostDto: UserCreatePostDto) {
    var val = this.http.post<AddFriendPostDto>(this.url + 'add/user', userCreatePostDto);
    return val;
  }


  login(password, email) {

    return this.http.post<any>(
      this.url + "authenticate", {
      email,
      password,

    }).pipe(
      map(
        data => {

          return data;
        }
      )
    );

  }


}
