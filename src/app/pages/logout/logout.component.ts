import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import config from "../../../assets/config/config";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  error:boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(`${config.api}/logout`)
      .subscribe((data:any) => {
        if(data.status) {
          this.router.navigate(["home"]);
        } else {
          this.error = true
        }
      });
  }

  ngOnInit(): void {
  }

}
