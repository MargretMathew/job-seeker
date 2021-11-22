import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import config from "../../../assets/config/config";

@Component({
  selector: "app-dashboardemployer",
  templateUrl: "./dashboardemployer.component.html",
  styleUrls: ["./dashboardemployer.component.css"]
})
export class DashboardemployerComponent implements OnInit {
  jobName: string = "";
  description: string = "";
  message:string = "";
  error:string = "";

  constructor(private http: HttpClient) {
    this.http.get(`${config.api}/employer/get-job`)
      .subscribe((data:any) => {
        console.log(data);
        this.jobName = data.name
        this.description = data.description
      });
  }

  postValue() {
    this.http
      .post(`${config.api}/employer/post-job`, {
        jobName: this.jobName,
        description: this.description
      })
      .subscribe((response_data: any) => {
        console.log(response_data);
        if(response_data.status) {
          this.message = "Saved"
        } else {
          this.error = "error"
        }
      });
  }
  ngOnInit(): void {}
}
