import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import config from "../../../assets/config/config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  getValue() {
    if(this.email == "") {
      this.error = "Enter Email";
      return;
    }
    if(this.password == "") {
      this.error = "Enter Password";
      return;
    }
    this.http
      .post(`${config.api}/login`, {
        email: this.email,
        password: this.password,
      })
      .subscribe((data:any) => {
        if(data.status) {
          if(data.userType == 'company') {
            this.router.navigate(['employer'])
          } else { // user
            this.router.navigate(['jobs'])
          }
        } else {
          this.error = "Incorrect Credentials"
        }
      });
  }
  ngOnInit(): void {
  }

}
