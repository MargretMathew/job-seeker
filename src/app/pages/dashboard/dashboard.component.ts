import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import config from "../../../assets/config/config";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  jobs: any[] = [];
  messages: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get(`${config.api}/employee/jobs`)
      .subscribe((response_data: any) => {
        this.jobs = response_data;
      });
    this.http
      .get(`${config.api}/employee/notifications`)
      .subscribe((response_data: any) => {
        console.log(response_data);
        this.messages = response_data;
      });
  }

  ngOnInit(): void {}

  apply(id:string) {
    this.http
      .post(`${config.api}/employee/apply`,{
        id
      })
      .subscribe((data: any) => {
        if(data.status) {
          for(let i:number=0;i<this.jobs.length;i++) {
            if(this.jobs[i]._id == id) {
              this.jobs[i].applied = true
            }
          }
        } else {
          console.log(data);
        }
      });
  }
}
