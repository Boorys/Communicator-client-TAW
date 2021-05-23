import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FriendDto } from 'src/app/models/FriendDto';
import { DataService } from 'src/app/services/data.service';
import { of, from } from 'rxjs';
import { takeWhile, map, filter } from 'rxjs/operators'
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  @Output() friendsEmit = new EventEmitter<FriendDto>()
  @Input() messageFrom: string
  @Input() friendId:number
  friends: FriendDto[]
  userId: string
  checkedFrendId: number

  constructor(private dataService: DataService) { }

  ngOnChanges(messageFrom: string,friendId:number) {

      this.update(messageFrom)
  }

  update(messageFrom: string) {
 
    this.friends.forEach((friend) => {
   
      if (friend.friendId.toString() === this.messageFrom) {
      
        if(this.friendId.toString() !== friend.friendId.toString())
        {  
          friend.messageWait=true;
        }
        else{
          friend.messageWait=false;
          this.messageFrom=null;
        }    
      }
    })
  }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId')
    this.dataService.getFriend(this.userId).subscribe(data => {
      this.friends = data;
    }, error => {
    })
  }

  chooseFriend(friendDto: FriendDto) {
    this.friendsEmit.emit(friendDto);
    this.checkedFrendId = friendDto.friendId
  }
}
