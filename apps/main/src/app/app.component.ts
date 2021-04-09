import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ns/api-interfaces';
import { AppService } from './app.service';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private appService: AppService) {
  }
  ngOnInit(): void {
    this.appService.getListItem().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }
}
