import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  showNav = false;
  constructor(private router : Router) { }
  ngOnInit() {
    debugger;
    this.showNav = false;
  }
  login() {
    if(this.email == 'raj@gmail.com' && this.password == 'password') {
      this.router.navigate(['app']);
    }else {
      alert("Invalid credentials.")
    }
  }
}
