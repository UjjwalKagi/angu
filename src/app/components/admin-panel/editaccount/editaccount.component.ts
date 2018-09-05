import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserServiceService } from '../../../services/user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {

  user=new User();
  data:any;
  // user:User;
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private userService:UserServiceService,private router: Router) { }

  ngOnInit() {
    this.listAnUser();
    this.onSubmit
  }
  listAnUser() {
    this.userService.listAnAccount().subscribe(data => {

      console.log('Hello', this.data);
      this.data = data;
      this.user=this.data
      console.log('datass', this.user);
    },
      error => {
        console.log('user Error', error)
      });

  }
  onSubmit(form:NgForm){

    return this.userService.editUser(form.value).subscribe(data =>{
      
      this.message=data['messsage'];
      swal(this.message, " " , "success");
      this.router.navigate(['/adminDashboard']);
    }, error => {
     this.error = true;
     if (error.error['message']) {
       this.message = error.error['message'];
       swal(this.message, " " , "error");
       
     }
     else {
       this.message = error.message;
     }

   }); 

  }

}
