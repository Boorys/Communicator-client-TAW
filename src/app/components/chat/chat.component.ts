import { Component, OnInit, Input } from '@angular/core';
import { FriendDto } from 'src/app/models/FriendDto';
import { MessagePostDto } from 'src/app/models/MessagePostDto';
import { Stomp } from 'stompjs';
import { SockJS } from 'sockjs-client';
import { MessageGetDto } from 'src/app/models/MessageGetDto';
declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  
  messageComming2: string
  actualFriend: FriendDto
  friendId: number
  show: boolean
  messageFrom: string
  public stompClient;

  mes = new MessageGetDto("", "");

  constructor() {
    this.friendId = 0;
  }

  ngOnInit(): void {

    this.initializeWebSocketConnection();
    this.show = false;
  }

  friendsEmit(friendEmit: FriendDto) {

    this.actualFriend = friendEmit;
    this.friendId = friendEmit.friendId
    if (this.friendId !== null) {
      this.show = true;
    }
  }

  messageEmit(messageEmit: MessagePostDto) {
    this.sendMessage(messageEmit)
  }

  initializeWebSocketConnection() {
    const serverUrl = 'https://graphe-chat.herokuapp.com/gs-guide-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/greetings/' + localStorage.getItem('userId'), (message) => {

        if (message.body) {

          that.check(JSON.parse(message.body));

        }
      });
    });
  }

  check(message: MessageGetDto) {

    
    // if(message['friendId'].toString() === this.friendId.toString()) {
  


    if (message.friendId.toString() === this.friendId.toString()) {
     
      this.messageComming2 = message.textMessage
        
    }
    else {
      this.messageFrom = message['friendId']
    }
  }

  sendMessage(message: MessagePostDto) {

    message.friendId = this.actualFriend.friendId
    this.stompClient.send('/app/hello/' + this.actualFriend.userId, {}, JSON.stringify(message));
  }

}
