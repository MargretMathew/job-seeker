import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from "../../../assets/config/config";

@Component({
  selector: 'app-viewemployer',
  templateUrl: './viewemployer.component.html',
  styleUrls: ['./viewemployer.component.css'],
})
export class ViewemployerComponent implements OnInit {

  candidates: any[] = [];
  constructor(private http: HttpClient) {
    this.http
    .get(`${config.api}/employer/view-applied`)
    .subscribe((response_data: any) => {
        this.candidates = response_data;
      }
    );
  }

  showResume(email:string) {
    window.open(`${config.api}/resume/${email}.pdf`);
  }

  changeStatus(status:string, email:string) {
    this.http.post(`${config.api}/employer/status`, {
      status:status,
      email:email
    }).subscribe((data:any) => {
      if(data?.modifiedCount > 0) {
        for(let i:number=0;i<this.candidates.length;i++) {
          if(this.candidates[i].email == email) {
            this.candidates[i].edited = true
          }
        }
      }
    })
  }

  ngOnInit(): void {}
}
