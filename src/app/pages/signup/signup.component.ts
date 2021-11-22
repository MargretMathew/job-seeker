import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import config from "../../../assets/config/config";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  name: string = "";
  email: string = "";
  contact: string = "";
  password: string = "";
  @ViewChild("resume") resume: any;
  error: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  showValue() {
    const files = this.resume.nativeElement.files;
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
    if (files.length < 1) {
      this.error = "Select Resume";
      return;
    }
    if(this.password == "") {
      this.error = "Enter password";
      return
    }


    const file = files[0];
    const form = new FormData();
    form.append("name", this.name);
    form.append("email", this.email);
    form.append("contact", this.contact);
    form.append("password", this.password);
    form.append("resume", file, file.name);
    this.http
      .post(`${config.api}/signup`, form)
      .subscribe((response_data: any) => {
        if (response_data?.status) {
          this.router.navigate(["login"]);
        } else {
          this.error = "Some error occured";
        }
      });
  }

  ngOnInit(): void {}
}
