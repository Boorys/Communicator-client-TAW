import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { CredentailDto } from 'src/app/models/CredentailDto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string
  password: string
  informationMessage: string
  imgSrc:string
  constructor(
    
    private dataService: DataService,
    private router: Router,
  ) {
 
   this.imgSrc="../assets/socialBG.png"
  }

  ngOnInit(): void {
  this. informationMessage=" ";
  }
  handleLogin() {

if((this.email !== "" || this.password !== "") &&(this.email !== undefined || this.password !== undefined))
{   
this.dataService.login(this.password, this.email)
      .subscribe(
        data => {
          console.log(data.token)
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("token", 'Bearer '+data.token);
          this.router.navigate(['/chat']);
        },
        error => {
          if (error.status === 401) {
            this.informationMessage = "Inncorect password or email.";
          }
        }
      )
}else{
  this.informationMessage = "Field cannot be empty.";
}

  }

  handleRegister() {
    this.router.navigate(['/register']);
  }


}
