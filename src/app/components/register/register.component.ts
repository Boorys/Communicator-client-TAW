import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserCreatePostDto } from 'src/app/models/UserCreatePostDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  password: string
  confirmPassword: string
  email: string
  userName: string
  message: string

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister() {

    if (this.password !== this.confirmPassword) {
      this.message = "Inncorect password."
    }
    else if (this.password === "" || this.confirmPassword === "" || this.email === "" || this.userName === "") {
      this.message = "Field cannot be empty."
    }
    else if (this.password === undefined || this.confirmPassword === undefined || this.email === undefined || this.userName === undefined) {
      this.message = "Field cannot be empty."
    }
    else {
      var user = new UserCreatePostDto(this.password, this.email, this.userName)
     
      this.dataService.addUser(user).subscribe(data => {

        this.router.navigate(['/login']);
      }, error => {
     
        this.message= "User exist"

      })
    }

  }
}
