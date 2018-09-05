import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  data:any;
  user:User[];
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor( private userService:UserServiceService,private router: Router) { }

  ngOnInit() {

    this.listAllUser();

    
  }


  listAllUser() {
    this.userService.listAlluser().subscribe(data => {

      console.log('user', this.data);
      this.data = data;
      this.user=this.data;
      console.log('user', this.user);
    },
      error => {
        console.log('user Error', error)
      });

  }

  deleteUser(id:number){
    console.log("user delete id",id)
    this.userService.deleteUsere(id).subscribe(data => {
      this.listAllUser();
    },
      error => {
        console.log('user Error', error)
      });

  }
  }
   
 
  


