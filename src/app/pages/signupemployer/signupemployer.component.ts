import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import config from "../../../assets/config/config";

@Component({
  selector: 'app-signupemployer',
  templateUrl: './signupemployer.component.html',
  styleUrls: ['./signupemployer.component.css']
})
export class SignupemployerComponent implements OnInit {

  name: string = '';
  email: string = '';
  contact: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  showValue() {
    if(this.name == "") {
      this.error = "Enter name";
      return
    }
    if(this.email == "") {
      this.error = "Enter email";
      return
    }
    if(this.contact == "") {
      this.error = "Enter phone number";
      return
    }
    if(this.password == "") {
      this.error = "Enter password";
      return
    }
    this.http
      .post(`${config.api}/create-company`, {
        name: this.name,
        email: this.email,
        contact: this.contact,
        password: this.password,
      })
      .subscribe((response_data:any) => {
        if (response_data?.status) {
          this.router.navigate(["login"]);
        } else {
          this.error = 'some error occured';
        }
      });
  }

  ngOnInit(): void {
  }

}
