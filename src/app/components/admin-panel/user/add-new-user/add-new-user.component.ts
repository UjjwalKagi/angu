import { Component, OnInit } from '@angular/core';
import { AddNewUser } from '../../../../model/addnewUser';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../../../services/user-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  user = new AddNewUser();
  submitted = false;
  error:boolean;
  message:string;
  constructor(private router: Router,private userService:UserServiceService) { }

  ngOnInit() {
    this.onSubmit
  }

  onSubmit(form: NgForm){
    return this.userService.createUser(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
       this.message=data['messsage'];
       form.reset();
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
