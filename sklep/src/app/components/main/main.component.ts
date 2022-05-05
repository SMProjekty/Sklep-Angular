import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:SharedService) { }

  // UserList: any = [];

  ngOnInit(): void {
    // this.refreshUserList();
  }

  // refreshUserList(){
  //   this.service.users().subscribe(data=>{
  //     this.UserList=data;
  //   });
  // }

}
