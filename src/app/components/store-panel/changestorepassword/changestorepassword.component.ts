import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Password } from '../../../model/password';
import { ChangePasswordService } from '../../../services/change-password.service';
@Component({
  selector: 'app-changestorepassword',
  templateUrl: './changestorepassword.component.html',
  styleUrls: ['./changestorepassword.component.css']
})
export class ChangestorepasswordComponent implements OnInit {

  model=new Password();
  submitted = false;
  error:boolean;
  message:string;
  constructor(private changePassword:ChangePasswordService,private router: Router) { }

  ngOnInit() {
    this.onSubmit
  }

  onSubmit(form: NgForm){
    return this.changePassword.changeStorePassword(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
       this.message=data['message'];
       console.log(this.message)
       swal(this.message, " " , "success");
       this.router.navigate(['/store/home']);
       form.reset();
      
       
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
