import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  data:any;
  user:User;
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.listAnUser();
  }

  listAnUser() {
    this.userService.listAnAccount().subscribe(data => {

      console.log('user', this.data);
      this.data = data;
      this.user=this.data
      console.log('user', this.user);
    },
      error => {
        console.log('user Error', error)
      });

  }
   

}
