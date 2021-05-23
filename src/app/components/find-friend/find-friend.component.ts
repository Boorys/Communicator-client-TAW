import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { AddFriendPostDto } from 'src/app/models/AddFriendPostDto';

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.css']
})
export class FindFriendComponent implements OnInit {

  users: User[]
  firstName: string

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  chooseUsers(user: User) {
    let index = this.users.findIndex(d => d.firstName === user.firstName)
    this.removeItem(index)

    this.dataService.addFriend(new AddFriendPostDto(user.userId, localStorage.getItem('userId'))).subscribe(response => {
    }, error => {

      console.log(error);
    })
  }

  removeItem(index) {
    this.users.splice(index, 1);
    const TMP = this.users;
    this.users = [];
    setTimeout(() => {
      this.users = TMP;
    });
    this.cd.detectChanges();
  }

  changeFriendName() {

    if (this.firstName !== "") 
    {
      this.dataService.getUser(this.firstName,localStorage.getItem('userId')).subscribe(data => {
      this.users = data;
      }, error => {
      })
    }
  }
}
