import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor(

    private dataService: DataService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {

  }
  routeChat() {
    this.router.navigate(['/chat']);
  }
  findFriend() {
    this.router.navigate(['/addFriend']);
  }
  logOut() {
    localStorage.clear();
  
    this.router.navigate(['/login'])
  }
  

}
